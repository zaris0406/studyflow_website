<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $courseId = (int)($_GET['courseId'] ?? 0);
    $stmt = db()->prepare(
        'select r.id, r.course_id, r.rating, r.comment, r.created_at, p.display_name
         from course_reviews r
         join profiles p on p.id = r.user_id
         where r.course_id = ?
         order by r.created_at desc'
    );
    $stmt->execute([$courseId]);
    respond(['reviews' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_input();
    $courseId = (int)($data['courseId'] ?? 0);
    $rating = max(1, min(5, (int)($data['rating'] ?? 5)));
    $comment = trim((string)($data['comment'] ?? ''));
    if ($courseId <= 0) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }

    $stmt = db()->prepare(
        'insert into course_reviews (course_id, user_id, rating, comment)
         values (?, ?, ?, ?)
         on duplicate key update rating = values(rating), comment = values(comment)'
    );
    $stmt->execute([$courseId, $user['id'], $rating, $comment]);
    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
