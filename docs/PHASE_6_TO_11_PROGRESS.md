# Phase 6-11 Complete For Demo And Production Blueprint

## Phase 6 - Auth, role và backend thật

Đã có trong demo:

- Mock auth session trong Account.
- Login/logout demo.
- Demo account switcher cho Student, Teacher, Admin.
- Role gating dựa trên session cho Studio/Admin.
- Schema có `profiles.role` với enum `student`, `teacher`, `admin`.

Còn khi deploy production thật:

- Kết nối Supabase Auth thật.
- Deploy RLS từ `db/rls_policies.sql`.
- Thay mock session bằng session thật.

## Phase 7 - Storage và asset pipeline

Đã có trong demo:

- Upload thumbnail và lesson image bằng data URL.
- Asset library local trong Studio.
- Preview asset.
- Quota summary 5 MB cho local demo.
- Delete asset khỏi thư viện local.
- Schema có bảng `assets`.

Còn để production:

- Deploy bucket `lesson-assets`.
- Chạy `db/storage_policies.sql`.
- Thay data URL bằng upload file thật.

## Phase 8 - Classroom

Đã có trong demo:

- Tạo lớp.
- Thêm học sinh mẫu.
- Invite code và join class trong demo.
- Gán course cho lớp.
- Student view theo tên tài khoản.
- Progress board mô phỏng.
- Schema có `classrooms`, `classroom_students`, `classroom_assignments`.

Còn để production:

- Join bằng tài khoản thật.
- Progress từng học sinh từ `lesson_progress`.

## Phase 9 - Admin dashboard

Đã có trong demo:

- Moderation tiles.
- Filter submission/report theo trạng thái.
- Audit log local.
- Risk alerts cho admin dựa trên report, rejected submissions và reputation.
- Approve/reject submission.
- Resolve/dismiss report.

Còn để production:

- Audit log backend từ `audit_logs`.
- Version compare.
- Creator risk alerts.

## Phase 10 - AI tutor và recommendation

Đã có trong demo:

- Tutor local mock.
- Lưu tutor interactions local.
- Practice quiz local từ lesson hiện tại.
- Weak spots recommendation từ failed/low-score lessons.
- Schema có `tutor_interactions`.

Còn để production:

- AI API thật.
- Semantic search/embedding.
- Tutor memory theo user thật.

## Phase 11 - Testing và readiness

Đã có trong demo:

- Export/import JSON.
- Focus states.
- Responsive CSS cơ bản.
- Readiness panel trong Account.
- Self-check runner trong Account.
- Syntax check bằng `node --check`.

Còn để production:

- Playwright tests.
- Unit tests.
- Accessibility audit tự động.
- Error/loading states đầy đủ.

Đã có thêm:

- `tests/smoke.test.mjs` để kiểm tra smoke test không cần package ngoài.
- `docs/SUPABASE_SETUP.md` để chuyển sang Supabase theo thứ tự.
- `db/rls_policies.sql` và `db/storage_policies.sql`.
