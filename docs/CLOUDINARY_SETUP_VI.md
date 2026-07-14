# Thiết lập Cloudinary cho StudyFlow

StudyFlow upload ảnh/video bài học qua PHP backend. Trình duyệt chỉ gọi `api/assets.php`; Cloud name, API Key và API Secret chỉ nằm trong `api/config.php` trên server.

## 1. Lấy credential

Trong Cloudinary Console, mở Dashboard hoặc Settings > API Keys rồi lấy:

- Cloud name
- API Key
- API Secret

Không đưa API Secret vào `app.js`, HTML, repository public hoặc chat.

## 2. Cấu hình `api/config.php`

Mở file `public_html/api/config.php`. Giữ nguyên cấu hình database hiện tại và thêm hoặc thay phần storage:

```php
'storage_driver' => 'cloudinary',
'cloudinary_cloud_name' => 'CLOUD_NAME',
'cloudinary_api_key' => 'API_KEY',
'cloudinary_api_secret' => 'API_SECRET',
'cloudinary_asset_folder' => 'studyflow/lesson-assets',
'cloudinary_tags' => 'studyflow,lesson-assets',
```

Không ghi đè `config.php` mỗi lần deploy vì file này chứa mật khẩu MySQL và Cloudinary secret.

## 3. Upload code

Các file bắt buộc phải có trên hosting:

- `api/assets.php`
- `api/storage.php`
- `api/storage-health.php`
- `api/admin/media-cleanup.php`
- `api/courses.php`
- `app/app.js`

Trong cPanel `Select PHP Version`, bật extension `curl` và `fileinfo`.

## 4. Kiểm tra

1. Đăng nhập tài khoản admin trên web.
2. Mở `https://zaovietknives.com/api/storage-health.php`.
3. Nếu đúng, response có dạng:

```json
{"ok":true,"driver":"cloudinary","connected":true,"uploadReady":true}
```

4. Vào `Fix lesson` hoặc Studio, chọn ảnh trong lesson rồi lưu/upload course lên web.
5. Trong Cloudinary Media Library, asset mới sẽ nằm dưới `studyflow/lesson-assets/<user-id>/<year>/<month>/`.

## 5. Lỗi thường gặp

- `CLOUD_UPLOAD_FAILED`: kiểm tra Cloud name, API Key, API Secret, PHP cURL và giới hạn upload của cPanel.
- `STORAGE_CONNECTION_FAILED`: mở `/api/storage-health.php` bằng tài khoản admin để xem hint chi tiết.
- `413 FILE_TOO_LARGE`: StudyFlow đang giới hạn mỗi file ở 150 MB. Đồng thời kiểm tra `upload_max_filesize` và `post_max_size` trong PHP.
- Asset cũ còn trỏ về `api/media.php?key=...`: upload lại ảnh/video đó để database nhận URL Cloudinary mới.
