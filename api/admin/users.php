<?php
declare(strict_types=1);
require __DIR__ . '/../bootstrap.php';

$admin = require_role(['admin']);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->query(
        'select id, display_name, email, role, school_name, class_name, reputation_score, created_at
         from profiles
         order by created_at desc
         limit 200'
    );
    respond(['users' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_input();
    $userId = (int)($data['userId'] ?? 0);
    $role = (string)($data['role'] ?? '');
    if ($userId <= 0 || !in_array($role, ['student', 'teacher_pending', 'teacher', 'admin'], true)) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare('update profiles set role = ? where id = ?');
    $stmt->execute([$role, $userId]);

    $audit = db()->prepare('insert into audit_logs (actor_id, actor_role, action, body) values (?, ?, ?, ?)');
    $audit->execute([$admin['id'], $admin['role'], 'role_updated', "user {$userId} -> {$role}"]);
    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
