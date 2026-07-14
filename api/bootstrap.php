<?php
declare(strict_types=1);

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    $configPath = __DIR__ . '/config.sample.php';
}

$config = require $configPath;

session_name($config['session_name'] ?? 'studyflow_session');
session_set_cookie_params([
    'httponly' => true,
    'secure' => (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off'),
    'samesite' => 'Lax',
    'path' => '/',
]);
session_start();

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    respond(['ok' => true]);
}

function db(): PDO
{
    static $pdo = null;
    global $config;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=utf8mb4',
        $config['db_host'],
        $config['db_name']
    );

    $pdo = new PDO($dsn, $config['db_user'], $config['db_pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $pdo->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");

    return $pdo;
}

function json_input(): array
{
    $raw = file_get_contents('php://input') ?: '';
    if ($raw === '') {
        return [];
    }

    $decoded = json_decode($raw, true);
    if (!is_array($decoded)) {
        respond(['error' => 'INVALID_JSON', 'message' => 'Body must be valid JSON.'], 400);
    }

    return $decoded;
}

function respond(array $payload, int $status = 200): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function require_method(string $method): void
{
    if ($_SERVER['REQUEST_METHOD'] !== $method) {
        respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
    }
}

function current_user(): ?array
{
    if (empty($_SESSION['user_id'])) {
        return null;
    }

    $stmt = db()->prepare('select id, display_name, age, school_name, class_name, email, email_verified, avatar_url, bio, reputation_score, role, created_at from profiles where id = ?');
    $stmt->execute([$_SESSION['user_id']]);
    $user = $stmt->fetch();

    return $user ?: null;
}

function ensure_bootstrap_admin(): void
{
    static $seeded = false;
    if ($seeded) {
        return;
    }
    $seeded = true;

    global $config;
    $email = trim((string)($config['bootstrap_admin_email'] ?? ''));
    $password = (string)($config['bootstrap_admin_password'] ?? '');
    if ($email === '' || $password === '' || $password === 'CHANGE_ME') {
        return;
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = db()->prepare(
        "insert into profiles (display_name, email, email_verified, password_hash, role, reputation_score)
         values ('StudyFlow Admin', ?, 1, ?, 'admin', 100)
         on duplicate key update
           display_name = values(display_name),
           email_verified = 1,
           password_hash = values(password_hash),
           role = 'admin',
           reputation_score = greatest(reputation_score, 100)"
    );
    $stmt->execute([$email, $hash]);
}

function require_user(): array
{
    $user = current_user();
    if (!$user) {
        respond(['error' => 'UNAUTHENTICATED'], 401);
    }
    return $user;
}

function require_role(array $allowedRoles): array
{
    $user = require_user();
    if (!in_array($user['role'], $allowedRoles, true)) {
        respond(['error' => 'FORBIDDEN'], 403);
    }
    return $user;
}

function pick(array $source, array $keys): array
{
    $result = [];
    foreach ($keys as $key) {
        if (array_key_exists($key, $source)) {
            $result[$key] = $source[$key];
        }
    }
    return $result;
}
