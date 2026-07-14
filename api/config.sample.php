<?php
// Copy this file to config.php on the server and fill in your cPanel MySQL values.
// Never commit or upload real passwords to a public repository.

return [
    'db_host' => 'localhost',
    'db_name' => 'cpaneluser_studyflow',
    'db_user' => 'cpaneluser_studyflow_user',
    'db_pass' => 'CHANGE_ME',
    'session_name' => 'studyflow_session',
    'bootstrap_admin_email' => 'admin@example.com',
    'bootstrap_admin_password' => 'CHANGE_ME',

    // Production media storage. Keep real Cloudinary credentials only in api/config.php on cPanel.
    'storage_driver' => 'cloudinary',
    'cloudinary_cloud_name' => 'CHANGE_ME',
    'cloudinary_api_key' => 'CHANGE_ME',
    'cloudinary_api_secret' => 'CHANGE_ME',
    'cloudinary_asset_folder' => 'studyflow/lesson-assets',
    'cloudinary_tags' => 'studyflow,lesson-assets',
];
