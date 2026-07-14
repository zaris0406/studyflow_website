<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->prepare(
        'select lesson_id, status, score, completed_at, updated_at from lesson_progress where user_id = ?'
    );
    $stmt->execute([$user['id']]);
    respond(['progress' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_input();
    $lessonId = (int)($data['lessonId'] ?? 0);
    $score = max(0, min(100, (int)($data['score'] ?? 0)));
    $status = (string)($data['status'] ?? ($score >= 70 ? 'passed' : 'failed'));
    $allowed = ['not_started', 'in_progress', 'passed', 'failed'];

    if ($lessonId <= 0 || !in_array($status, $allowed, true)) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $completedAt = $status === 'passed' ? date('Y-m-d H:i:s') : null;
    $stmt = db()->prepare(
        'insert into lesson_progress (user_id, lesson_id, status, score, completed_at)
         values (?, ?, ?, ?, ?)
         on duplicate key update status = values(status), score = values(score), completed_at = values(completed_at)'
    );
    $stmt->execute([$user['id'], $lessonId, $status, $score, $completedAt]);

    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
