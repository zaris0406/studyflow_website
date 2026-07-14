<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

try {
    $stmt = db()->query('select 1 as ok');
    $row = $stmt->fetch();
    respond([
        'ok' => (int)($row['ok'] ?? 0) === 1,
        'database' => 'connected',
        'time' => date(DATE_ATOM),
    ]);
} catch (Throwable $error) {
    respond([
        'ok' => false,
        'database' => 'failed',
        'message' => $error->getMessage(),
    ], 500);
}
