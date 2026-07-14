<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (in_array($user['role'], ['teacher', 'admin'], true)) {
        $stmt = db()->prepare('select id, teacher_id, name, invite_code, created_at from classrooms where teacher_id = ? order by created_at desc');
        $stmt->execute([$user['id']]);
    } else {
        $stmt = db()->prepare(
            'select c.id, c.teacher_id, c.name, c.invite_code, c.created_at
             from classrooms c
             join classroom_students cs on cs.classroom_id = c.id
             where cs.student_id = ?
             order by c.created_at desc'
        );
        $stmt->execute([$user['id']]);
    }
    respond(['classrooms' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_input();
    $action = (string)($data['action'] ?? 'create');

    if ($action === 'join') {
        $code = strtoupper(trim((string)($data['inviteCode'] ?? '')));
        $stmt = db()->prepare('select id from classrooms where invite_code = ?');
        $stmt->execute([$code]);
        $classroom = $stmt->fetch();
        if (!$classroom) {
            respond(['error' => 'CLASSROOM_NOT_FOUND'], 404);
        }
        $stmt = db()->prepare('insert ignore into classroom_students (classroom_id, student_id) values (?, ?)');
        $stmt->execute([$classroom['id'], $user['id']]);
        respond(['ok' => true, 'classroomId' => (int)$classroom['id']]);
    }

    require_role(['teacher', 'admin']);
    $name = trim((string)($data['name'] ?? ''));
    $inviteCode = strtoupper(trim((string)($data['inviteCode'] ?? '')));
    if ($name === '') {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }
    if ($inviteCode === '') {
        $inviteCode = strtoupper(substr(preg_replace('/[^A-Z0-9]/', '', $name), 0, 6) . random_int(100, 999));
    }

    $stmt = db()->prepare('insert into classrooms (teacher_id, name, invite_code) values (?, ?, ?)');
    $stmt->execute([$user['id'], $name, $inviteCode]);
    respond(['classroomId' => (int)db()->lastInsertId(), 'inviteCode' => $inviteCode], 201);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
