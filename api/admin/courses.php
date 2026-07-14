<?php
declare(strict_types=1);
require __DIR__ . '/../bootstrap.php';

$admin = require_role(['admin']);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->query(
        "select id, author_id, title, slug, subject, difficulty, status, created_at
         from courses
         where status in ('pending_review', 'draft', 'published', 'archived')
         order by created_at desc"
    );
    respond(['courses' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_input();
    $courseId = (int)($data['courseId'] ?? 0);
    $status = (string)($data['status'] ?? '');
    if ($courseId <= 0 || !in_array($status, ['published', 'archived', 'rejected'], true)) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $storedStatus = $status === 'rejected' ? 'archived' : $status;
    $stmt = db()->prepare('update courses set status = ? where id = ?');
    $stmt->execute([$storedStatus, $courseId]);

    $audit = db()->prepare('insert into audit_logs (actor_id, actor_role, action, body) values (?, ?, ?, ?)');
    $audit->execute([$admin['id'], $admin['role'], 'course_moderated', "course {$courseId} -> {$status}"]);
    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
