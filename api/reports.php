<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_input();
    $targetType = (string)($data['targetType'] ?? '');
    $targetId = (int)($data['targetId'] ?? 0);
    $reason = trim((string)($data['reason'] ?? ''));
    if (!in_array($targetType, ['course', 'lesson', 'question', 'answer'], true) || $targetId <= 0 || $reason === '') {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare('insert into content_reports (reporter_id, target_type, target_id, reason) values (?, ?, ?, ?)');
    $stmt->execute([$user['id'], $targetType, $targetId, $reason]);
    respond(['reportId' => (int)db()->lastInsertId()], 201);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
