<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';
require __DIR__ . '/storage.php';

require_role(['admin']);

function storage_health_hint(string $message): string
{
    $lower = strtolower($message);
    if (str_contains($lower, 'cloud_name') || str_contains($lower, 'api_key') || str_contains($lower, 'api_secret') || str_contains($lower, 'configured') || str_contains($lower, 'change_me')) {
        return 'Điền đủ storage_driver, cloudinary_cloud_name, cloudinary_api_key và cloudinary_api_secret trong api/config.php.';
    }
    if (str_contains($lower, 'unauthorized') || str_contains($lower, '401')) {
        return 'Kiểm tra API Key và API Secret trong Cloudinary Dashboard > Settings > API Keys.';
    }
    if (str_contains($lower, 'curl')) {
        return 'Bật PHP extension cURL trong cPanel Select PHP Version.';
    }
    return 'Mở Cloudinary Dashboard, lấy Cloud name, API Key, API Secret rồi lưu vào api/config.php trên server.';
}

try {
    if (!storage_is_cloudinary()) {
        respond([
            'ok' => true,
            'driver' => storage_driver(),
            'cloudName' => '',
            'connected' => false,
            'uploadReady' => false,
            'message' => 'Cloud storage is not using Cloudinary.',
        ]);
    }

    $health = storage_check_cloudinary();
    respond([
        'ok' => true,
        'driver' => storage_driver(),
        'cloudName' => $health['cloudName'],
        'assetFolder' => $health['assetFolder'],
        'connected' => true,
        'uploadReady' => true,
        'plan' => $health['plan'],
        'usage' => [
            'credits' => $health['credits'],
            'objects' => $health['objects'],
            'storage' => $health['storage'],
            'bandwidth' => $health['bandwidth'],
        ],
        'message' => 'Cloudinary can authorize with the configured API credentials.',
    ]);
} catch (Throwable $error) {
    error_log('StudyFlow storage health check failed: ' . $error->getMessage());
    respond([
        'ok' => false,
        'driver' => storage_driver(),
        'error' => 'STORAGE_CONNECTION_FAILED',
        'message' => $error->getMessage(),
        'hint' => storage_health_hint($error->getMessage()),
    ], 503);
}
