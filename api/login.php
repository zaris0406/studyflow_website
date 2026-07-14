<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

require_method('POST');
$data = json_input();

$email = strtolower(trim((string)($data['email'] ?? '')));
$password = (string)($data['password'] ?? '');

ensure_bootstrap_admin();

$stmt = db()->prepare('select * from profiles where email = ?');
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || empty($user['password_hash']) || !password_verify($password, $user['password_hash'])) {
    respond(['error' => 'INVALID_LOGIN'], 401);
}

session_regenerate_id(true);
$_SESSION['user_id'] = (int)$user['id'];

unset($user['password_hash']);
respond(['user' => current_user()]);
