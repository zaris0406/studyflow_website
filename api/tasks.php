<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->prepare('select id, title, status, due_date, created_at from daily_tasks where user_id = ? order by due_date is null, due_date asc, created_at desc');
    $stmt->execute([$user['id']]);
    respond(['tasks' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_input();
    $title = trim((string)($data['title'] ?? ''));
    $dueDate = trim((string)($data['dueDate'] ?? ''));
    if ($title === '') {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare('insert into daily_tasks (user_id, title, status, due_date) values (?, ?, ?, ?)');
    $stmt->execute([$user['id'], $title, 'todo', $dueDate ?: null]);
    respond(['taskId' => (int)db()->lastInsertId()], 201);
}

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_input();
    $taskId = (int)($data['taskId'] ?? 0);
    $status = (string)($data['status'] ?? 'todo');
    if ($taskId <= 0 || !in_array($status, ['todo', 'doing', 'done', 'skipped'], true)) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare('update daily_tasks set status = ? where id = ? and user_id = ?');
    $stmt->execute([$status, $taskId, $user['id']]);
    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
