<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = db()->prepare('select note_date, content, mood, focus_minutes from daily_notes where user_id = ? order by note_date desc limit 60');
    $stmt->execute([$user['id']]);
    respond(['notes' => $stmt->fetchAll()]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' || $_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = json_input();
    $date = trim((string)($data['date'] ?? date('Y-m-d')));
    $content = trim((string)($data['content'] ?? ''));
    $mood = trim((string)($data['mood'] ?? 'focused'));
    $focusMinutes = max(0, (int)($data['focusMinutes'] ?? 0));

    $stmt = db()->prepare(
        'insert into daily_notes (user_id, note_date, content, mood, focus_minutes)
         values (?, ?, ?, ?, ?)
         on duplicate key update content = values(content), mood = values(mood), focus_minutes = values(focus_minutes)'
    );
    $stmt->execute([$user['id'], $date, $content, $mood, $focusMinutes]);
    respond(['ok' => true]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
