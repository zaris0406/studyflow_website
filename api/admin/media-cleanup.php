<?php
declare(strict_types=1);
require __DIR__ . '/../bootstrap.php';
require __DIR__ . '/../storage.php';

$admin = require_role(['admin']);
$prefix = storage_cloudinary_asset_folder() . '/';

function media_cleanup_extract_public_ids(mixed $value): array
{
    $publicIds = [];
    if (is_array($value)) {
        foreach ($value as $item) {
            $publicIds = array_merge($publicIds, media_cleanup_extract_public_ids($item));
        }
        return array_values(array_unique($publicIds));
    }
    if (!is_string($value) || $value === '') {
        return [];
    }

    $text = html_entity_decode($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $candidates = [$text];
    if (preg_match_all('~https?://res\.cloudinary\.com/[^\s"\'<>]+~i', $text, $matches)) {
        $candidates = array_merge($candidates, $matches[0]);
    }

    foreach ($candidates as $candidate) {
        $publicId = storage_extract_public_id_from_url($candidate);
        if ($publicId !== '') {
            $publicIds[] = $publicId;
        }
    }

    return array_values(array_unique($publicIds));
}

function media_cleanup_collect_used_public_ids(): array
{
    $used = [];
    $add = static function (string $publicId, string $source) use (&$used): void {
        if (!isset($used[$publicId])) {
            $used[$publicId] = ['publicId' => $publicId, 'sources' => []];
        }
        $used[$publicId]['sources'][] = $source;
    };

    $courseStmt = db()->query('select id, title, thumbnail_url from courses');
    foreach ($courseStmt->fetchAll() as $course) {
        foreach (media_cleanup_extract_public_ids($course['thumbnail_url'] ?? '') as $publicId) {
            $add($publicId, 'course thumbnail: ' . (string)$course['title']);
        }
    }

    $blockStmt = db()->query(
        'select lesson_blocks.content_json, lessons.title as lesson_title, courses.title as course_title
         from lesson_blocks
         join lessons on lessons.id = lesson_blocks.lesson_id
         join course_levels on course_levels.id = lessons.level_id
         join courses on courses.id = course_levels.course_id'
    );
    foreach ($blockStmt->fetchAll() as $block) {
        $decoded = json_decode((string)$block['content_json'], true);
        $haystack = is_array($decoded) ? $decoded : (string)$block['content_json'];
        $source = 'lesson: ' . (string)$block['course_title'] . ' / ' . (string)$block['lesson_title'];
        foreach (media_cleanup_extract_public_ids($haystack) as $publicId) {
            $add($publicId, $source);
        }
    }

    foreach ($used as &$entry) {
        $entry['sources'] = array_values(array_unique($entry['sources']));
    }

    return $used;
}

function media_cleanup_collect_asset_metadata(): array
{
    $assets = [];
    $stmt = db()->query('select id, name, url, size_bytes, created_at from assets order by created_at desc');
    foreach ($stmt->fetchAll() as $asset) {
        foreach (media_cleanup_extract_public_ids($asset['url'] ?? '') as $publicId) {
            $assets[$publicId][] = [
                'id' => (int)$asset['id'],
                'name' => (string)$asset['name'],
                'sizeBytes' => (int)$asset['size_bytes'],
                'createdAt' => (string)$asset['created_at'],
            ];
        }
    }
    return $assets;
}

function media_cleanup_delete_asset_metadata(array $publicIds): int
{
    if (!$publicIds) {
        return 0;
    }
    $assets = media_cleanup_collect_asset_metadata();
    $ids = [];
    foreach ($publicIds as $publicId) {
        foreach (($assets[$publicId] ?? []) as $asset) {
            $ids[] = (int)$asset['id'];
        }
    }
    $ids = array_values(array_unique(array_filter($ids)));
    if (!$ids) {
        return 0;
    }

    $placeholders = implode(',', array_fill(0, count($ids), '?'));
    $stmt = db()->prepare("delete from assets where id in ({$placeholders})");
    $stmt->execute($ids);
    return $stmt->rowCount();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!storage_is_cloudinary()) {
        respond([
            'storageDriver' => storage_driver(),
            'message' => 'Cloudinary storage is not enabled.',
            'unusedFiles' => [],
            'unusedCount' => 0,
            'unusedBytes' => 0,
        ]);
    }

    $limit = max(1, min(5000, (int)($_GET['limit'] ?? 1000)));
    $used = media_cleanup_collect_used_public_ids();
    $assetMetadata = media_cleanup_collect_asset_metadata();
    $listed = storage_list_cloudinary_resources($prefix, $limit);
    $unusedFiles = [];
    $unusedBytes = 0;

    foreach ($listed['resources'] as $resource) {
        $publicId = (string)$resource['publicId'];
        if (isset($used[$publicId])) {
            continue;
        }
        $metadata = $assetMetadata[$publicId] ?? [];
        $sizeBytes = (int)$resource['sizeBytes'];
        $unusedBytes += $sizeBytes;
        $unusedFiles[] = [
            'publicId' => $publicId,
            'resourceType' => (string)$resource['resourceType'],
            'assetId' => (string)$resource['assetId'],
            'sizeBytes' => $sizeBytes,
            'contentType' => (string)$resource['contentType'],
            'createdAt' => (string)$resource['createdAt'],
            'secureUrl' => (string)$resource['secureUrl'],
            'assetRecordCount' => count($metadata),
            'assetNames' => array_values(array_unique(array_map(
                static fn (array $asset): string => (string)$asset['name'],
                $metadata,
            ))),
        ];
    }

    usort(
        $unusedFiles,
        static fn (array $a, array $b): int => strcmp((string)$b['createdAt'], (string)$a['createdAt']),
    );

    respond([
        'storageDriver' => storage_driver(),
        'prefix' => $prefix,
        'scanLimit' => $limit,
        'scannedCount' => count($listed['resources']),
        'truncated' => (bool)$listed['truncated'],
        'usedCount' => count($used),
        'assetMetadataCount' => count($assetMetadata),
        'unusedCount' => count($unusedFiles),
        'unusedBytes' => $unusedBytes,
        'unusedFiles' => $unusedFiles,
    ]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!storage_is_cloudinary()) {
        respond(['error' => 'CLOUDINARY_NOT_ENABLED'], 400);
    }

    $data = json_input();
    $files = is_array($data['files'] ?? null) ? $data['files'] : [];
    if (!$files || count($files) > 50) {
        respond(['error' => 'VALIDATION_ERROR', 'message' => 'Select 1 to 50 files per cleanup request.'], 422);
    }

    $used = media_cleanup_collect_used_public_ids();
    $deleteByType = ['image' => [], 'video' => []];
    $failed = [];
    foreach ($files as $file) {
        $publicId = trim((string)($file['publicId'] ?? ''));
        $resourceType = trim((string)($file['resourceType'] ?? 'image'));
        if (!in_array($resourceType, ['image', 'video'], true) || !str_starts_with($publicId, rtrim($prefix, '/'))) {
            $failed[] = ['publicId' => $publicId, 'message' => 'Invalid Cloudinary resource reference.'];
            continue;
        }
        if (isset($used[$publicId])) {
            $failed[] = ['publicId' => $publicId, 'message' => 'File is still linked to a course or lesson.'];
            continue;
        }
        $deleteByType[$resourceType][] = $publicId;
    }

    $deleted = [];
    foreach ($deleteByType as $resourceType => $publicIds) {
        if (!$publicIds) {
            continue;
        }
        try {
            $result = storage_delete_cloudinary_resources($resourceType, $publicIds);
            foreach (($result['deleted'] ?? []) as $publicId => $status) {
                if ($status === 'deleted' || $status === 'not_found') {
                    $deleted[] = (string)$publicId;
                } else {
                    $failed[] = ['publicId' => (string)$publicId, 'message' => (string)$status];
                }
            }
        } catch (Throwable $error) {
            foreach ($publicIds as $publicId) {
                $failed[] = ['publicId' => $publicId, 'message' => $error->getMessage()];
            }
        }
    }

    $metadataDeleted = media_cleanup_delete_asset_metadata($deleted);
    if ($deleted) {
        $audit = db()->prepare('insert into audit_logs (actor_id, actor_role, action, body) values (?, ?, ?, ?)');
        $audit->execute([
            $admin['id'],
            $admin['role'],
            'cloudinary_media_cleanup',
            'deleted ' . count($deleted) . ' unused files; metadata rows ' . $metadataDeleted,
        ]);
    }

    respond([
        'deleted' => $deleted,
        'deletedCount' => count($deleted),
        'metadataDeleted' => $metadataDeleted,
        'failed' => $failed,
    ]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
