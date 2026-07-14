<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

require_user();

respond([
    'error' => 'MEDIA_PROXY_DISABLED',
    'message' => 'Media files are delivered directly from Cloudinary URLs. Re-upload this lesson asset if it still points to the old media proxy.',
], 410);
