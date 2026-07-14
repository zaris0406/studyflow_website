<?php
declare(strict_types=1);
require __DIR__ . '/../bootstrap.php';

$admin = require_role(['admin']);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->query(
        'select id, reporter_id, target_type, target_id, reason, status, created_at, resolved_at
         from content_reports
         order by created_at desc
         limit 200'
    );
    respond(['reports' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_input();
    $reportId = (int)($data['reportId'] ?? 0);
    $status = (string)($data['status'] ?? '');
    if ($reportId <= 0 || !in_array($status, ['resolved', 'dismissed'], true)) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare('update content_reports set status = ?, resolved_at = current_timestamp where id = ?');
    $stmt->execute([$status, $reportId]);

    $audit = db()->prepare('insert into audit_logs (actor_id, actor_role, action, body) values (?, ?, ?, ?)');
    $audit->execute([$admin['id'], $admin['role'], 'report_moderated', "report {$reportId} -> {$status}"]);
    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
