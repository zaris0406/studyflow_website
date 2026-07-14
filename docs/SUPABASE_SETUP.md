# Supabase setup blueprint

## Mục tiêu

File này mô tả đường chuyển StudyFlow từ demo `localStorage` sang Supabase/PostgreSQL.

## Thứ tự chạy SQL

1. Chạy schema chính:

```sql
\i db/schema.sql
```

2. Tạo bucket storage:

```sql
insert into storage.buckets (id, name, public)
values ('lesson-assets', 'lesson-assets', false)
on conflict (id) do nothing;
```

3. Chạy policies cho storage:

```sql
\i db/storage_policies.sql
```

4. Chạy RLS policies:

```sql
\i db/rls_policies.sql
```

## Mapping production

- `profiles.id` nên map với `auth.uid()`.
- `profiles.role` dùng 3 role: `student`, `teacher`, `admin`.
- File upload đi vào bucket `lesson-assets`.
- Metadata file lưu ở bảng `assets`.
- Course publish flow dùng `courses.status`.
- Classroom dùng `classrooms`, `classroom_students`, `classroom_assignments`.
- Moderation dùng `moderation_queue` và `audit_logs`.
- Tutor history dùng `tutor_interactions`.

## Việc cần làm khi chuyển framework

- Chuyển app sang Next.js hoặc Vite app có module.
- Tạo Supabase client.
- Thay `localStorage` state bằng query/mutation.
- Đưa auth vào middleware hoặc route guard.
- Dùng server-side validation cho creator draft và moderation.
