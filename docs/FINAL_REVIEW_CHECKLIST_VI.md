# Checklist review cuối cho StudyFlow

## 1. Giao diện chung

- Mở `app/index.html`.
- Kiểm tra font Montserrat trên toàn web.
- Mở course `Cryptocurrency`, title card trái phải nằm một dòng, không rớt `cy`.
- Thử desktop và mobile width.

## 2. Account theo role

Vào `Settings`, đổi demo account:

- Student: Account chỉ có thông tin cá nhân và thông tin bài học.
- Teacher: Account có thông tin cá nhân, tài khoản/mật khẩu, bài giảng của tôi, tổng bài giảng upload.
- Admin: Account chỉ có thông tin cá nhân, tài khoản/mật khẩu.
- Quản trị nền tảng chỉ nằm trong Settings khi role là admin.

## 3. Courses và Lesson

- Mở course.
- Start lesson.
- Làm quiz đúng/sai.
- Điểm >= 70 thì pass và mở bài tiếp.
- Điểm < 70 thì failed và phải làm lại.
- Hoàn thành lesson xong progress cập nhật.

## 4. Today

- Thêm task.
- Tick task done.
- Viết daily note.
- Đổi mood/focus minutes.
- Streak và calendar cập nhật.

## 5. Classroom

- Role teacher tạo lớp, gán course.
- Role student nhập invite code để tham gia.
- Student thấy bài được giao.
- Teacher thấy progress board.

## 6. Studio

- Role student không vào được Studio.
- Role teacher tạo course/level/lesson/block.
- Upload ảnh local.
- Submit vào moderation.
- Role admin duyệt/từ chối.

## 7. Community

- Review course.
- Hỏi câu hỏi trong lesson.
- Trả lời câu hỏi.
- Report nội dung.
- Admin xử lý report trong moderation.

## 8. Backend trên Namecheap

Sau khi deploy:

- Không test backend bằng đường dẫn `C:/.../index.html`.
- Phải mở bằng domain hoặc localhost server có PHP.
- Mở `/api/health.php`, thấy `database: connected`.
- Vào Settings, bấm `Check backend`.
- Register backend account.
- Login backend account.
- Load `/api/me`.
- Lưu Account, kiểm tra không lỗi.
- Hoàn thành lesson, progress sync không báo lỗi console.
- Teacher submit course, backend nhận `pending_review`.

## 9. Deploy

- Upload `deploy/studyflow-namecheap.zip`.
- Import `db/namecheap_mysql_schema.sql`.
- Tạo `api/config.php` từ `api/config.sample.php`.
- Điền đúng DB name/user/password.
