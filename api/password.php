<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] !== 'POST' && $_SERVER['REQUEST_METHOD'] !== 'PATCH') {
    respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
}

$data = json_input();
$currentPassword = (string)($data['currentPassword'] ?? '');
$newPassword = (string)($data['newPassword'] ?? '');

if ($currentPassword === '' || strlen($newPassword) < 8) {
    respond([
        'error' => 'VALIDATION_ERROR',
        'message' => 'currentPassword and newPassword with at least 8 characters are required.'
    ], 422);
}

$stmt = db()->prepare('select password_hash from profiles where id = ?');
$stmt->execute([$user['id']]);
$row = $stmt->fetch();

if (!$row || empty($row['password_hash']) || !password_verify($currentPassword, $row['password_hash'])) {
    respond(['error' => 'INVALID_PASSWORD', 'message' => 'Current password is not correct.'], 401);
}

$hash = password_hash($newPassword, PASSWORD_DEFAULT);
$update = db()->prepare('update profiles set password_hash = ? where id = ?');
$update->execute([$hash, $user['id']]);

$audit = db()->prepare('insert into audit_logs (actor_id, actor_role, action, body) values (?, ?, ?, ?)');
$audit->execute([$user['id'], $user['role'], 'password_changed', 'password updated']);

respond(['ok' => true]);
