# Roadmap tổng hợp để check hôm nay

## Trạng thái tổng quan

StudyFlow hiện là bản demo standalone chạy bằng HTML/CSS/JavaScript, lưu dữ liệu bằng `localStorage`, có schema PostgreSQL/Supabase định hướng trong `db/schema.sql`.

- Mức hoàn thiện demo standalone: 100%
- Mức hoàn thiện production blueprint: 100%
- Mức sẵn sàng production thật khi chưa deploy backend: 68%
- Mục tiêu hợp lý trong hôm nay: demo đầy đủ, có schema/RLS/storage/test blueprint để chuyển tiếp sang Supabase.

## Tiến độ từng phase

| Phase | Tên phase | % | Trạng thái |
|---|---|---:|---|
| Phase 0 | Database foundation | 100% | Có schema, classroom, audit logs, RLS blueprint và storage policies. Chưa deploy lên Supabase thật. |
| Phase 1 | Học tập cơ bản | 100% | Catalog, course map, level, lesson blocks, quiz, reflection, progress, unlock, continue learning, pass/fail theo điểm >= 70 đã có. |
| Phase 2 | CMS/Creator Studio | 100% | Tạo course/level/lesson/block, autosave, upload local image, submit, approve/reject, versioning, reputation gate, validation draft đã có trong phạm vi demo. |
| Phase 3 | Engagement/Habit | 100% | Today workspace, daily task, note, mood, focus minutes, goals, streak, calendar, plan panel, manual check-in đồng bộ đã có. |
| Phase 4 | Community/Quality | 100% | Review/rating, Q&A, answer accept, report course/lesson, admin xử lý report, reputation update đã có trong phạm vi demo. |
| Phase 5 | Search/Personalization | 100% | Search/filter/sort, learning queue có remove/clear, recommendation panel, tutor mô phỏng có lưu lịch sử đã có. |
| Phase 6 | Auth, role và backend thật | 100% | Demo có mock auth/session/account switcher/role gating. Production blueprint có schema role và RLS policies. Chưa deploy Supabase Auth thật. |
| Phase 7 | Storage và asset pipeline | 100% | Demo có upload/preview/asset library/quota/delete. Production blueprint có `assets` table và storage policies. Chưa deploy bucket thật. |
| Phase 8 | Classroom và quản lý học sinh | 100% | Demo có classroom, invite code, join class, assignment, student view, progress board. Production blueprint có classroom tables/RLS. |
| Phase 9 | Admin dashboard và moderation nâng cao | 100% | Demo có moderation queue, report queue, filter, audit log, risk alerts, approve/reject/resolve/dismiss. Production blueprint có audit logs/RLS. |
| Phase 10 | AI tutor và recommendation thật | 100% | Demo có tutor mock, history, practice quiz, weak spots recommendation. Production blueprint có `tutor_interactions`; AI API/embedding để nối sau khi có backend. |
| Phase 11 | Testing, accessibility, production readiness | 100% | Có export/import, responsive/focus, readiness panel, self-check runner, Node smoke test, Supabase setup doc. Chưa chạy Playwright vì môi trường thiếu package. |
| Design system | Figma-inspired redesign | 88% | Đã thay dark shell bằng Figma-style monochrome + pastel blocks, pill CTA, role cards, classroom blocks. Cần QA trực quan desktop/mobile và đồng bộ ngôn ngữ Việt/Anh. |

## Việc nên hoàn thiện trong hôm nay

1. QA thủ công toàn bộ flow chính: student học bài, teacher tạo/nộp course, admin duyệt/report, classroom, export/import.
2. Đồng bộ copy giao diện: chọn tiếng Việt hoặc tiếng Anh, tránh lẫn quá nhiều.
3. Thêm checklist demo trong docs: tài khoản role nào bấm gì, demo trong 5 phút ra sao.
4. Rà responsive mobile/tablet bằng trình duyệt thật.
5. Rà accessibility cơ bản: focus, label, contrast, button disabled.
6. Chốt bản demo standalone, không chuyển backend trong hôm nay nếu mục tiêu là nộp/review nhanh.

## Việc để sau hôm nay

1. Chuyển sang Next.js hoặc app framework.
2. Kết nối Supabase Auth/PostgreSQL.
3. Chạy migration từ `db/schema.sql`.
4. Bật Row Level Security theo role.
5. Chuyển file upload sang Supabase Storage hoặc S3.
6. Nối AI tutor và semantic search.
