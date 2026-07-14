<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

require_method('POST');
$data = json_input();

$displayName = trim((string)($data['displayName'] ?? ''));
$email = strtolower(trim((string)($data['email'] ?? '')));
$password = (string)($data['password'] ?? '');
$role = (string)($data['role'] ?? 'student');
$role = $role === 'teacher' ? 'teacher_pending' : 'student';

if ($displayName === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($password) < 8) {
    respond([
        'error' => 'VALIDATION_ERROR',
        'message' => 'displayName, valid email, and password with at least 8 characters are required.'
    ], 422);
}

$stmt = db()->prepare('select id from profiles where email = ?');
$stmt->execute([$email]);
if ($stmt->fetch()) {
    respond(['error' => 'EMAIL_EXISTS'], 409);
}

$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = db()->prepare(
    'insert into profiles (display_name, email, password_hash, role) values (?, ?, ?, ?)'
);
$stmt->execute([$displayName, $email, $hash, $role]);

$_SESSION['user_id'] = (int)db()->lastInsertId();
respond(['user' => current_user()], 201);
