# Roadmap StudyFlow LMS/CMS

## Tổng quan hiện tại

StudyFlow hiện là bản web standalone chạy bằng HTML/CSS/JavaScript và lưu dữ liệu bằng `localStorage`. Mục tiêu của bản này là chứng minh đầy đủ luồng sản phẩm trước khi chuyển sang backend thật như Supabase/PostgreSQL.

Nền tảng hiện có 3 vai trò tài khoản:

- Học sinh: học bài, làm quiz, dùng Today workspace, review, hỏi đáp và báo cáo nội dung.
- Giáo viên: có quyền của học sinh, thêm quyền tạo khóa học/bài học trong Studio và nộp kiểm duyệt.
- Admin: có quyền của giáo viên, thêm quyền duyệt khóa học, xử lý báo cáo và quản trị chất lượng.

## Đã hoàn thành theo 5 phase đầu

### Phase 1 - Học tập cơ bản

Đã có:

- Danh sách khóa học.
- Trang chi tiết khóa học dạng level map.
- Bài học dạng block-based.
- Block text, flashcard, quiz, reflection, image, video resource.
- Chấm quiz và lưu tiến độ.
- Pass/fail lesson theo điểm, cần đạt tối thiểu 70% để mở bài tiếp theo.
- Unlock bài học theo thứ tự.
- Continue learning.

### Phase 2 - CMS/Creator Studio

Đã có:

- Studio tạo khóa học.
- Tạo nhiều level.
- Tạo nhiều lesson trong từng level.
- Thêm, xóa, sắp xếp block.
- Upload thumbnail khóa học.
- Upload ảnh trong lesson.
- Autosave draft.
- Nộp bài vào moderation queue.
- Sửa draft pending/rejected.
- Admin approve/reject.
- Versioning cho course đã publish.
- Reputation gate cho creator.

### Phase 3 - Engagement/Habit

Đã có:

- Today workspace.
- Daily task.
- Task gắn với course/lesson/next lesson.
- Daily note.
- Mood và focus minutes.
- Daily goals.
- Streak.
- Activity calendar 14 ngày.
- Learning plan gợi ý bài học tiếp theo.
- Manual check-in đồng bộ Today panel, calendar và daily goals.

### Phase 4 - Community/Quality

Đã có:

- Review/rating khóa học.
- Quality signal.
- Q&A trong lesson.
- Trả lời câu hỏi.
- Accept answer.
- Report course.
- Report lesson.
- Admin xử lý report.
- Reputation thay đổi theo review, Q&A và report.

### Phase 5 - Search/Personalization

Đã có:

- Search theo course, lesson và nội dung block.
- Filter theo subject.
- Filter theo difficulty.
- Filter theo duration.
- Sort theo recommended, rating, progress, newest.
- Learning queue.
- Xóa từng course khỏi learning queue.
- Clear toàn bộ learning queue.
- Recommendation panel.
- Tutor prompt mô phỏng trong lesson.
- Lưu lịch sử tutor prompt local cho từng lesson.

## Vừa bổ sung sau khi audit

Đã thêm:

- Trang Account.
- 3 vai trò chính: Admin, Giáo viên, Học sinh.
- Sidebar hiển thị tên và vai trò hiện tại.
- Học sinh không vào được Studio.
- Giáo viên vào Studio để tạo/nộp bài nhưng không được duyệt.
- Admin thấy moderation queue và có quyền approve/reject/resolve/dismiss.
- Schema database chỉ còn enum role: `student`, `teacher`, `admin`.
- Account có Data Tools để export/import toàn bộ dữ liệu demo dưới dạng JSON.
- Có Classrooms bản standalone: giáo viên/admin tạo lớp, thêm học sinh mẫu, gán course; học sinh xem lớp theo tên tài khoản.
- Schema SQL đã có bảng `classrooms`, `classroom_students`, `classroom_assignments`.

## Còn thiếu so với sản phẩm thật

Các phần còn thiếu lớn:

- Chưa có backend thật.
- Chưa có đăng ký/đăng nhập thật.
- Chưa có Supabase Auth hoặc session bảo mật.
- Chưa có Row Level Security.
- Chưa có upload file thật lên object storage.
- Dữ liệu đang nằm trong `localStorage`, chưa đồng bộ nhiều thiết bị.
- Tutor hiện là mô phỏng local, chưa nối AI API.
- Chưa có dashboard admin chuyên sâu.
- Chưa có dashboard giáo viên theo lớp/học sinh.
- Classroom hiện là bản standalone trong `localStorage`; chưa có classroom thật theo user/session backend.
- Auth hiện là mock session trong demo, chưa phải Supabase Auth thật.
- Account đã có demo account switcher cho Student, Teacher, Admin.
- Asset library hiện là local data URL, chưa phải object storage thật.
- Classroom demo đã có invite code và join class local.
- Admin đã có filter/audit log cơ bản, chưa có audit backend thật.
- Admin đã có risk alerts cơ bản.
- Đã có `db/rls_policies.sql`, `db/storage_policies.sql`, `docs/SUPABASE_SETUP.md`.
- Đã có smoke test Node ở `tests/smoke.test.mjs`.
- Chưa có thông báo.
- Chưa có kiểm thử tự động bằng Playwright/unit test.
- Chưa có accessibility audit đầy đủ.
- Chưa có i18n hoàn chỉnh cho toàn bộ giao diện.

## Roadmap cải tiến tiếp theo

### Phase 6 - Auth, role và backend thật

Mục tiêu: biến bản standalone thành app có tài khoản thật.

Cần làm:

- Chuyển sang Next.js hoặc stack app có routing rõ ràng.
- Kết nối Supabase/PostgreSQL.
- Thêm Supabase Auth.
- Map user vào bảng `profiles`.
- Áp dụng 3 role: học sinh, giáo viên, admin.
- Thêm Row Level Security.
- Đã có blueprint RLS trong `db/rls_policies.sql`.
- Chuyển progress/task/note/review/Q&A từ localStorage sang database.
- Bản demo đã có mock auth session và login/logout local để kiểm thử role.

Kết quả mong muốn:

- Mỗi người dùng đăng nhập thấy dữ liệu riêng.
- Giáo viên không duyệt được nội dung.
- Học sinh không truy cập Studio.
- Admin có quyền moderation thật.

### Phase 7 - Storage và asset pipeline

Mục tiêu: xử lý file bài học đúng chuẩn.

Cần làm:

- Dùng Supabase Storage hoặc S3-compatible storage.
- Đã có blueprint Supabase Storage trong `db/storage_policies.sql`.
- Upload thumbnail, ảnh lesson, PDF, video.
- Lưu metadata file vào bảng `assets`.
- Thêm giới hạn dung lượng và loại file.
- Thêm alt text bắt buộc cho ảnh.
- Thêm preview và delete asset.
- Bản demo đã có asset library local, preview và delete asset trong Studio.
- Bản demo đã có quota summary 5 MB cho asset local.

Kết quả mong muốn:

- File không còn nằm trong `localStorage`.
- Creator có thư viện tài nguyên dùng lại được.

### Phase 8 - Classroom và quản lý học sinh

Mục tiêu: giáo viên quản lý lớp học thật.

Cần làm:

- Chuyển classroom standalone sang classroom thật trong database.
- Mời học sinh vào lớp bằng tài khoản thật hoặc mã mời.
- Giao course/lesson/task cho lớp bằng bản ghi assignment.
- Theo dõi tiến độ từng học sinh theo dữ liệu `lesson_progress`.
- Bản demo đã có progress board mô phỏng cho classroom.
- Bản demo đã có invite code và join class bằng tên tài khoản hiện tại.
- Xuất báo cáo học tập.
- Cho giáo viên comment/gợi ý học sinh.

Kết quả mong muốn:

- Nền tảng dùng được cho lớp học, không chỉ tự học cá nhân.

### Phase 9 - Admin dashboard và moderation nâng cao

Mục tiêu: admin kiểm soát chất lượng nền tảng.

Cần làm:

- Dashboard thống kê course pending/report/review.
- Bộ lọc moderation theo loại nội dung.
- Lịch sử duyệt.
- Bản demo đã có filter theo trạng thái và audit log local.
- Khóa/tạm ẩn course.
- Cảnh báo creator có nhiều report.
- Version compare cho course revisions.

Kết quả mong muốn:

- Nội dung do người dùng tạo vẫn kiểm soát được chất lượng.

### Phase 10 - AI tutor và recommendation thật

Mục tiêu: cá nhân hóa học tập tốt hơn.

Cần làm:

- Nối AI API cho tutor.
- Lưu tutor interactions.
- Bản demo đã lưu tutor interactions local và có weak spots recommendation.
- Bản demo đã có practice quiz local từ lesson hiện tại.
- Tạo course search document.
- Thêm semantic search/embedding.
- Gợi ý bài học theo tiến độ, điểm yếu, streak và mục tiêu ngày.
- Tạo quiz bổ sung từ lesson content.

Kết quả mong muốn:

- Học sinh nhận được gợi ý học và giải thích phù hợp với bản thân.

### Phase 11 - Kiểm thử, accessibility và production readiness

Mục tiêu: đưa app tới mức có thể demo nghiêm túc.

Cần làm:

- Viết test cho role permission.
- Viết test cho lesson progress.
- Viết test cho creator submission/moderation.
- Playwright test các flow chính.
- Đã có smoke test Node không cần package ngoài.
- Accessibility audit.
- Responsive QA.
- Error states/loading states.
- Bản demo đã có readiness panel trong Account để check trạng thái production readiness.
- Bản demo đã có self-check runner trong Account.
- Export/import dữ liệu demo hiện đã có ở bản standalone; khi lên production cần đổi thành backup/sync phía backend.

Kết quả mong muốn:

- App ổn định, có thể trình bày với thầy/cô hoặc phát triển tiếp thành sản phẩm.

## Ưu tiên tiếp theo nên làm

Thứ tự nên làm tiếp:

1. Chuyển sang Next.js + Supabase.
2. Làm Auth và role thật.
3. Chuyển schema hiện tại vào migration.
4. Di chuyển dữ liệu localStorage sang database.
5. Làm Supabase Storage cho asset.
6. Tách dashboard riêng cho Admin, Giáo viên, Học sinh.
