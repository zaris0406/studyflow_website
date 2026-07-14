<?php
declare(strict_types=1);

function storage_driver(): string
{
    global $config;
    return strtolower(trim((string)($config['storage_driver'] ?? 'local')));
}

function storage_is_cloudinary(): bool
{
    return storage_driver() === 'cloudinary';
}

function storage_require_cloudinary_config(): array
{
    global $config;

    $required = [
        'cloudinary_cloud_name',
        'cloudinary_api_key',
        'cloudinary_api_secret',
    ];
    foreach ($required as $key) {
        $value = trim((string)($config[$key] ?? ''));
        if ($value === '' || $value === 'CHANGE_ME') {
            throw new RuntimeException('Cloudinary is not configured: ' . $key);
        }
        $config[$key] = $value;
    }

    if (!extension_loaded('curl')) {
        throw new RuntimeException('The PHP cURL extension is required for Cloudinary uploads.');
    }

    return $config;
}

function storage_cloudinary_asset_folder(): string
{
    global $config;
    $folder = trim((string)($config['cloudinary_asset_folder'] ?? 'studyflow/lesson-assets'), "/ \t\n\r\0\x0B");
    return $folder !== '' ? $folder : 'studyflow/lesson-assets';
}

function storage_resource_type_for_mime(string $mimeType): string
{
    if (str_starts_with($mimeType, 'image/')) {
        return 'image';
    }
    if (str_starts_with($mimeType, 'video/')) {
        return 'video';
    }
    return 'raw';
}

function storage_upload(
    string $tmpPath,
    string $publicId,
    string $mimeType,
    int $sizeBytes,
    string $originalName = 'asset',
): array {
    if (!storage_is_cloudinary()) {
        throw new RuntimeException('Cloudinary storage is not enabled.');
    }
    if (!is_file($tmpPath) || $sizeBytes <= 0) {
        throw new RuntimeException('The temporary upload file is missing.');
    }

    $config = storage_require_cloudinary_config();
    $resourceType = storage_resource_type_for_mime($mimeType);
    $endpoint = sprintf(
        'https://api.cloudinary.com/v1_1/%s/%s/upload',
        rawurlencode((string)$config['cloudinary_cloud_name']),
        rawurlencode($resourceType),
    );
    $tags = trim((string)($config['cloudinary_tags'] ?? 'studyflow,lesson-assets'));

    $fields = [
        'file' => new CURLFile($tmpPath, $mimeType, $originalName),
        'public_id' => $publicId,
        'overwrite' => 'false',
        'use_filename' => 'false',
        'unique_filename' => 'false',
    ];
    if ($tags !== '') {
        $fields['tags'] = $tags;
    }

    $response = cloudinary_http_request('POST', $endpoint, $fields);
    $data = cloudinary_decode_response($response);
    if (empty($data['secure_url']) || empty($data['public_id'])) {
        throw new RuntimeException('Cloudinary upload response is incomplete.');
    }

    return $data;
}

function storage_media_url(array $uploadResponse): string
{
    return (string)($uploadResponse['secure_url'] ?? $uploadResponse['url'] ?? '');
}

function storage_check_cloudinary(): array
{
    $config = storage_require_cloudinary_config();
    $endpoint = sprintf(
        'https://api.cloudinary.com/v1_1/%s/usage',
        rawurlencode((string)$config['cloudinary_cloud_name']),
    );
    $response = cloudinary_http_request('GET', $endpoint);
    $data = cloudinary_decode_response($response);

    return [
        'cloudName' => (string)$config['cloudinary_cloud_name'],
        'assetFolder' => storage_cloudinary_asset_folder(),
        'plan' => (string)($data['plan'] ?? ''),
        'credits' => $data['credits'] ?? null,
        'objects' => $data['objects'] ?? null,
        'storage' => $data['storage'] ?? null,
        'bandwidth' => $data['bandwidth'] ?? null,
    ];
}

function storage_list_cloudinary_resources(string $prefix = '', int $limit = 1000): array
{
    if (!storage_is_cloudinary()) {
        throw new RuntimeException('Cloudinary storage is not enabled.');
    }

    $config = storage_require_cloudinary_config();
    $prefix = trim($prefix) !== '' ? trim($prefix) : storage_cloudinary_asset_folder() . '/';
    $limit = max(1, min(5000, $limit));
    $resources = [];
    $truncated = false;
    $lastCursor = '';

    foreach (['image', 'video'] as $resourceType) {
        $nextCursor = null;
        do {
            $remaining = $limit - count($resources);
            if ($remaining <= 0) {
                $truncated = true;
                break;
            }
            $params = [
                'prefix' => $prefix,
                'max_results' => (string)max(1, min(500, $remaining)),
            ];
            if ($nextCursor !== null && $nextCursor !== '') {
                $params['next_cursor'] = $nextCursor;
            }
            $endpoint = sprintf(
                'https://api.cloudinary.com/v1_1/%s/resources/%s/upload?%s',
                rawurlencode((string)$config['cloudinary_cloud_name']),
                rawurlencode($resourceType),
                http_build_query($params),
            );
            $response = cloudinary_http_request('GET', $endpoint);
            $data = cloudinary_decode_response($response);

            foreach (($data['resources'] ?? []) as $resource) {
                if (!is_array($resource)) {
                    continue;
                }
                $publicId = (string)($resource['public_id'] ?? '');
                if ($publicId === '' || !str_starts_with($publicId, rtrim($prefix, '/'))) {
                    continue;
                }
                $resources[] = [
                    'publicId' => $publicId,
                    'resourceType' => $resourceType,
                    'assetId' => (string)($resource['asset_id'] ?? ''),
                    'sizeBytes' => max(0, (int)($resource['bytes'] ?? 0)),
                    'contentType' => $resourceType . '/' . (string)($resource['format'] ?? ''),
                    'createdAt' => (string)($resource['created_at'] ?? ''),
                    'secureUrl' => (string)($resource['secure_url'] ?? ''),
                ];
                if (count($resources) >= $limit) {
                    $truncated = true;
                    break 2;
                }
            }

            $nextCursor = (string)($data['next_cursor'] ?? '');
            $lastCursor = $nextCursor;
        } while ($nextCursor !== '');
    }

    return [
        'resources' => $resources,
        'truncated' => $truncated || $lastCursor !== '',
        'nextCursor' => $lastCursor,
    ];
}

function storage_delete_cloudinary_resources(string $resourceType, array $publicIds): array
{
    if (!storage_is_cloudinary()) {
        throw new RuntimeException('Cloudinary storage is not enabled.');
    }
    $resourceType = storage_resource_type_for_mime($resourceType . '/x') === 'video' ? 'video' : 'image';
    $publicIds = array_values(array_unique(array_filter(array_map('strval', $publicIds))));
    if (!$publicIds || count($publicIds) > 100) {
        throw new RuntimeException('Select 1 to 100 Cloudinary resources per delete request.');
    }

    $config = storage_require_cloudinary_config();
    $endpoint = sprintf(
        'https://api.cloudinary.com/v1_1/%s/resources/%s/upload',
        rawurlencode((string)$config['cloudinary_cloud_name']),
        rawurlencode($resourceType),
    );
    $fields = [];
    foreach ($publicIds as $index => $publicId) {
        $fields['public_ids[' . $index . ']'] = $publicId;
    }
    $fields['invalidate'] = 'true';

    $response = cloudinary_http_request('DELETE', $endpoint, $fields);
    return cloudinary_decode_response($response);
}

function storage_extract_public_id_from_url(string $url): string
{
    $url = trim($url);
    if ($url === '' || !str_contains($url, 'res.cloudinary.com/')) {
        return '';
    }

    $path = (string)(parse_url($url, PHP_URL_PATH) ?? '');
    if ($path === '') {
        return '';
    }
    $segments = array_values(array_filter(explode('/', trim($path, '/')), 'strlen'));
    $uploadIndex = array_search('upload', $segments, true);
    if ($uploadIndex === false || !isset($segments[$uploadIndex + 1])) {
        return '';
    }

    $publicSegments = array_slice($segments, $uploadIndex + 1);
    while ($publicSegments && preg_match('/^v\d+$/', $publicSegments[0])) {
        array_shift($publicSegments);
    }
    if (!$publicSegments) {
        return '';
    }

    $lastIndex = count($publicSegments) - 1;
    $publicSegments[$lastIndex] = preg_replace('/\.[A-Za-z0-9]+$/', '', $publicSegments[$lastIndex]);
    return rawurldecode(implode('/', $publicSegments));
}

function cloudinary_http_request(string $method, string $url, array $fields = []): array
{
    $config = storage_require_cloudinary_config();
    $handle = curl_init($url);
    if ($handle === false) {
        throw new RuntimeException('Could not initialize cURL.');
    }

    $options = [
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_TIMEOUT => 300,
        CURLOPT_USERPWD => (string)$config['cloudinary_api_key'] . ':' . (string)$config['cloudinary_api_secret'],
        CURLOPT_HTTPAUTH => CURLAUTH_BASIC,
    ];
    if ($fields) {
        $options[CURLOPT_POSTFIELDS] = $fields;
    }

    curl_setopt_array($handle, $options);
    $responseBody = curl_exec($handle);
    $status = (int)curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
    $curlError = curl_error($handle);
    curl_close($handle);

    if ($responseBody === false) {
        throw new RuntimeException('Cloudinary request failed: ' . $curlError);
    }

    return ['status' => $status, 'body' => (string)$responseBody];
}

function cloudinary_decode_response(array $response): array
{
    $data = json_decode((string)($response['body'] ?? ''), true);
    if (!is_array($data)) {
        throw new RuntimeException('Cloudinary returned an invalid response.');
    }

    $status = (int)($response['status'] ?? 0);
    if ($status < 200 || $status >= 300) {
        $message = trim((string)($data['error']['message'] ?? $data['message'] ?? ''));
        throw new RuntimeException('Cloudinary API: HTTP ' . $status . ($message !== '' ? ' - ' . $message : ''));
    }

    return $data;
}
