<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $lessonId = (int)($_GET['lessonId'] ?? 0);
    $stmt = db()->prepare(
        'select q.id, q.lesson_id, q.body, q.status, q.created_at, p.display_name
         from lesson_questions q
         join profiles p on p.id = q.user_id
         where q.lesson_id = ?
         order by q.created_at desc'
    );
    $stmt->execute([$lessonId]);
    respond(['questions' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_input();
    $action = (string)($data['action'] ?? 'ask');

    if ($action === 'answer') {
        $questionId = (int)($data['questionId'] ?? 0);
        $body = trim((string)($data['body'] ?? ''));
        if ($questionId <= 0 || $body === '') {
            respond(['error' => 'VALIDATION_ERROR'], 422);
        }
        $stmt = db()->prepare('insert into lesson_answers (question_id, user_id, body) values (?, ?, ?)');
        $stmt->execute([$questionId, $user['id'], $body]);
        $update = db()->prepare("update lesson_questions set status = 'answered' where id = ?");
        $update->execute([$questionId]);
        respond(['answerId' => (int)db()->lastInsertId()], 201);
    }

    $lessonId = (int)($data['lessonId'] ?? 0);
    $body = trim((string)($data['body'] ?? ''));
    if ($lessonId <= 0 || $body === '') {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }
    $stmt = db()->prepare('insert into lesson_questions (lesson_id, user_id, body) values (?, ?, ?)');
    $stmt->execute([$lessonId, $user['id'], $body]);
    respond(['questionId' => (int)db()->lastInsertId()], 201);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
