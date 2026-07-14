<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';
require __DIR__ . '/storage.php';

$user = require_role(['teacher', 'admin']);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->prepare('select id, name, asset_type, mime_type, size_bytes, url, alt_text, created_at from assets where owner_id = ? order by created_at desc');
    $stmt->execute([$user['id']]);
    respond(['assets' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!empty($_FILES['file']) && is_array($_FILES['file'])) {
        $file = $_FILES['file'];
        if (($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
            respond(['error' => 'UPLOAD_FAILED', 'message' => 'File upload failed.'], 400);
        }

        $assetType = trim((string)($_POST['assetType'] ?? 'file'));
        $altText = trim((string)($_POST['altText'] ?? ''));
        $originalName = basename((string)($file['name'] ?? 'uploaded-file'));
        $tmpName = (string)($file['tmp_name'] ?? '');
        $sizeBytes = (int)($file['size'] ?? 0);
        if ($tmpName === '' || $sizeBytes <= 0) {
            respond(['error' => 'VALIDATION_ERROR'], 422);
        }
        if ($sizeBytes > 150 * 1024 * 1024) {
            respond(['error' => 'FILE_TOO_LARGE', 'message' => 'Video/file must be 150MB or smaller.'], 413);
        }

        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mimeType = $finfo->file($tmpName) ?: (string)($file['type'] ?? 'application/octet-stream');
        if (strpos($mimeType, 'image/') !== 0 && strpos($mimeType, 'video/') !== 0) {
            respond(['error' => 'UNSUPPORTED_FILE', 'message' => 'Only image and video uploads are supported.'], 422);
        }

        $extensionMap = [
            'image/jpeg' => 'jpg',
            'image/png' => 'png',
            'image/webp' => 'webp',
            'image/gif' => 'gif',
            'image/svg+xml' => 'svg',
            'video/mp4' => 'mp4',
            'video/webm' => 'webm',
            'video/ogg' => 'ogv',
            'video/quicktime' => 'mov',
        ];
        $extension = $extensionMap[$mimeType] ?? strtolower(pathinfo($originalName, PATHINFO_EXTENSION) ?: 'bin');
        $safeBase = preg_replace('/[^a-zA-Z0-9_-]+/', '-', pathinfo($originalName, PATHINFO_FILENAME));
        $safeBase = trim((string)$safeBase, '-') ?: 'asset';
        $fileName = $safeBase . '-' . date('YmdHis') . '-' . bin2hex(random_bytes(4)) . '.' . $extension;
        if (storage_is_cloudinary()) {
            $publicId = storage_cloudinary_asset_folder() . '/' . (int)$user['id'] . '/' . date('Y/m') . '/' . pathinfo($fileName, PATHINFO_FILENAME);
            try {
                $upload = storage_upload($tmpName, $publicId, $mimeType, $sizeBytes, $originalName);
                $url = storage_media_url($upload);
            } catch (Throwable $error) {
                error_log('StudyFlow Cloudinary upload failed: ' . $error->getMessage());
                respond([
                    'error' => 'CLOUD_UPLOAD_FAILED',
                    'message' => 'Cloud storage upload failed: ' . $error->getMessage(),
                    'hint' => 'Open /api/storage-health.php as admin. Check cloudinary_cloud_name, cloudinary_api_key, cloudinary_api_secret, and PHP cURL.',
                ], 503);
            }
        } else {
            $relativeDir = 'uploads/lesson-assets/' . (int)$user['id'];
            $uploadDir = dirname(__DIR__) . '/' . $relativeDir;
            if (!is_dir($uploadDir) && !mkdir($uploadDir, 0755, true)) {
                respond(['error' => 'UPLOAD_DIR_FAILED'], 500);
            }

            $targetPath = $uploadDir . '/' . $fileName;
            if (!move_uploaded_file($tmpName, $targetPath)) {
                respond(['error' => 'UPLOAD_SAVE_FAILED'], 500);
            }
            @chmod($targetPath, 0644);

            $appBase = rtrim(str_replace('\\', '/', dirname(dirname($_SERVER['SCRIPT_NAME'] ?? ''))), '/');
            $url = $appBase . '/' . $relativeDir . '/' . $fileName;
        }
        $stmt = db()->prepare(
            'insert into assets (owner_id, name, asset_type, mime_type, size_bytes, url, alt_text)
             values (?, ?, ?, ?, ?, ?, ?)'
        );
        $stmt->execute([
            $user['id'],
            $originalName,
            $assetType,
            $mimeType,
            $sizeBytes,
            $url,
            $altText,
        ]);
        respond([
            'assetId' => (int)db()->lastInsertId(),
            'url' => $url,
            'name' => $originalName,
            'assetType' => $assetType,
            'mimeType' => $mimeType,
            'sizeBytes' => $sizeBytes,
        ], 201);
    }

    $data = json_input();
    $name = trim((string)($data['name'] ?? ''));
    $url = trim((string)($data['url'] ?? ''));
    if ($name === '' || $url === '') {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare(
        'insert into assets (owner_id, name, asset_type, mime_type, size_bytes, url, alt_text)
         values (?, ?, ?, ?, ?, ?, ?)'
    );
    $stmt->execute([
        $user['id'],
        $name,
        trim((string)($data['assetType'] ?? 'image')),
        trim((string)($data['mimeType'] ?? '')),
        max(0, (int)($data['sizeBytes'] ?? 0)),
        $url,
        trim((string)($data['altText'] ?? '')),
    ]);
    respond(['assetId' => (int)db()->lastInsertId()], 201);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
