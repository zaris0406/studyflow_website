<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

$user = require_user();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    respond(['user' => $user]);
}

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    $data = pick(json_input(), ['displayName', 'age', 'schoolName', 'className', 'email', 'bio', 'avatarUrl']);

    $displayName = trim((string)($data['displayName'] ?? $user['display_name']));
    $email = strtolower(trim((string)($data['email'] ?? $user['email'])));
    if ($displayName === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        respond(['error' => 'VALIDATION_ERROR'], 422);
    }
    $age = array_key_exists('age', $data)
        ? (trim((string)$data['age']) === '' ? null : (int)$data['age'])
        : $user['age'];

    $stmt = db()->prepare(
        'update profiles set display_name = ?, age = ?, school_name = ?, class_name = ?, email = ?, bio = ?, avatar_url = ? where id = ?'
    );
    $stmt->execute([
        $displayName,
        $age,
        trim((string)($data['schoolName'] ?? $user['school_name'])),
        trim((string)($data['className'] ?? $user['class_name'])),
        $email,
        trim((string)($data['bio'] ?? $user['bio'])),
        trim((string)($data['avatarUrl'] ?? $user['avatar_url'])),
        $user['id'],
    ]);

    respond(['user' => current_user()]);
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
