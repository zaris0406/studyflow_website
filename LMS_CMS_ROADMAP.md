# LMS/CMS Learning Platform Roadmap

## 1. Dinh huong san pham

Nen tang can gop 3 lop chuc nang:

1. LMS: hoc sinh tim khoa hoc, hoc theo level, lam quiz/bai tap, luu tien do.
2. CMS: giao vien va nguoi dung du uy tin co the tao, chinh sua, nop duyet tai nguyen bai hoc.
3. Habit workspace: diem danh, streak, daily note, task hang ngay de bien viec hoc thanh thoi quen.

Huong dung nhat: xay core nhu mot "learning operating system", khong chi la trang xem bai giang.

## 2. Kien truc database de xuat

### Lua chon chinh

Dung PostgreSQL lam database trung tam.

Ly do:

- Quan he du lieu cua LMS rat ro: users, roles, courses, levels, lessons, attempts, progress, reviews, tasks.
- Can query manh: loc khoa hoc theo mon, cap do, tac gia, rating, tien do, trang thai duyet.
- Can transaction: nop bai, cham diem, unlock level, cap streak phai nhat quan.
- Co the luu noi dung bai hoc linh hoat bang JSONB, nhung van giu cac thuc the quan trong o dang relational.

Khong nen luu file lon truc tiep trong database. Anh, video, PDF, audio, file dinh kem nen dua vao object storage, database chi luu metadata va URL/path.

### Stack MVP nen dung

Lua chon de lam nhanh va van dung chuan:

- Frontend/backend: Next.js
- Database: PostgreSQL qua Supabase
- Auth: Supabase Auth
- File storage: Supabase Storage
- ORM/query: Prisma hoac Drizzle
- Search giai doan dau: PostgreSQL full-text search
- Search nang cao ve sau: pgvector/semantic search neu can goi y bai hoc bang AI

Supabase phu hop cho bai nay vi co Postgres, Auth, Storage, Row Level Security, dashboard quan tri, va co the nang cap dan.

## 3. Mo hinh du lieu cot loi

### Nguoi dung va phan quyen

- profiles
  - id
  - display_name
  - avatar_url
  - bio
  - reputation_score
  - role: student, teacher, creator, moderator, admin
  - created_at

- creator_applications
  - id
  - user_id
  - evidence
  - status: pending, approved, rejected
  - reviewed_by
  - reviewed_at

### Course va lesson

- courses
  - id
  - title
  - slug
  - description
  - subject
  - difficulty
  - thumbnail_asset_id
  - author_id
  - status: draft, pending_review, published, archived
  - rating_avg
  - rating_count
  - created_at
  - updated_at

- course_levels
  - id
  - course_id
  - title
  - level_order
  - unlock_rule
  - pass_score

- lessons
  - id
  - level_id
  - title
  - lesson_order
  - estimated_minutes
  - content_schema_version
  - content_json
  - status

- lesson_blocks
  - id
  - lesson_id
  - block_order
  - type: text, image, video, multiple_choice, short_answer, flashcard, matching, mini_game, reflection
  - data_json
  - points

Ghi chu: co the chon 1 trong 2 cach:

- MVP nhanh: luu toan bo block trong lessons.content_json.
- Chuan cho mo rong: tach lesson_blocks de de query, cham diem, thong ke tung tuong tac.

Nen di theo cach tach lesson_blocks ngay tu dau neu muon co quiz, game, analytics va CMS editor nghiem tuc.

### Tien do hoc tap

- enrollments
  - id
  - user_id
  - course_id
  - status
  - started_at
  - completed_at

- lesson_progress
  - id
  - user_id
  - lesson_id
  - status: not_started, in_progress, passed, failed
  - score
  - attempts_count
  - completed_at

- interaction_attempts
  - id
  - user_id
  - lesson_block_id
  - answer_json
  - is_correct
  - score
  - created_at

### Review, chat hoi dap va kiem duyet

- course_reviews
  - id
  - user_id
  - course_id
  - rating
  - comment
  - created_at

- lesson_questions
  - id
  - user_id
  - lesson_id
  - body
  - status
  - created_at

- lesson_answers
  - id
  - question_id
  - user_id
  - body
  - is_accepted
  - created_at

- moderation_queue
  - id
  - target_type
  - target_id
  - status
  - reason
  - reviewed_by
  - reviewed_at

### Habit, streak va daily task

- attendance_logs
  - id
  - user_id
  - checkin_date
  - source: manual, lesson_completed, task_completed
  - created_at

- user_streaks
  - user_id
  - current_streak
  - longest_streak
  - last_checkin_date

- daily_notes
  - id
  - user_id
  - note_date
  - content
  - mood
  - created_at
  - updated_at

- daily_tasks
  - id
  - user_id
  - title
  - description
  - due_date
  - status: todo, doing, done, skipped
  - linked_course_id
  - linked_lesson_id
  - created_at
  - completed_at

### Asset storage

- assets
  - id
  - owner_id
  - bucket
  - path
  - mime_type
  - size_bytes
  - alt_text
  - created_at

File thuc te nam trong object storage. Database chi luu metadata.

## 4. Lesson content model

Moi lesson nen duoc render tu cac block co cau truc:

```json
{
  "type": "multiple_choice",
  "prompt": "Ket qua cua 2 + 3 la gi?",
  "choices": [
    { "id": "a", "text": "4" },
    { "id": "b", "text": "5" },
    { "id": "c", "text": "6" }
  ],
  "correctChoiceId": "b",
  "explanation": "2 + 3 = 5"
}
```

Block types cho MVP:

- text
- image
- video_embed
- multiple_choice
- short_answer
- flashcard
- matching
- reflection

Block types giai doan sau:

- drag_drop
- code_runner
- simulation
- mini_game
- ai_tutor_question

## 5. Roadmap trien khai

### Phase 0 - Product foundation

Muc tieu: chot flow va schema truoc khi code lon.

Can lam:

- Xac dinh role: student, teacher, creator, moderator, admin.
- Thiet ke sitemap: home, course catalog, course detail, level map, lesson player, daily workspace, creator studio, admin moderation.
- Tao database schema ban dau.
- Tao seed data mau: 3 khoa hoc, moi khoa 3 level, moi level 2 lesson, moi lesson co 3-5 block.

Ket qua hoan thanh:

- Co schema migration.
- Co mock content du de test UI nhu anh Brilliant.

### Phase 1 - MVP hoc tap

Muc tieu: hoc sinh co the vao hoc that.

Can lam:

- Auth dang ky/dang nhap.
- Trang danh sach khoa hoc.
- Trang course detail co level map.
- Lesson player hien thi block noi dung va quiz.
- Cham diem multiple choice.
- Luu lesson_progress va unlock level tiep theo.

Ket qua hoan thanh:

- Mot hoc sinh co the hoc tu dau den cuoi 1 course va thay tien do.

### Phase 2 - CMS creator studio

Muc tieu: giao vien/creator tao bai hoc tren web.

Can lam:

- Course editor.
- Level editor.
- Lesson block editor.
- Upload asset.
- Preview lesson.
- Submit for review.
- Admin/moderator approve/reject.

Ket qua hoan thanh:

- Creator tao duoc course moi ma khong can sua code.

### Phase 3 - Engagement va habit

Muc tieu: bien nen tang thanh noi hoc moi ngay.

Can lam:

- Diem danh hang ngay.
- Streak current/longest.
- Daily note.
- Daily task.
- Link task voi lesson/course.
- Dashboard "Hom nay hoc gi, lam gi".

Ket qua hoan thanh:

- User co routine hang ngay: check-in, hoc bai, hoan thanh task, ghi note.

### Phase 4 - Community va quality

Muc tieu: noi dung user-generated nhung van co chat luong.

Can lam:

- Review/rating course.
- Q&A trong lesson.
- Reputation score cho creator.
- Report content.
- Moderation queue.
- Course versioning co ban.

Ket qua hoan thanh:

- Nguoi dung tot co the dong gop bai hoc, nhung noi dung moi van qua kiem duyet.

### Phase 5 - Tim kiem va ca nhan hoa

Muc tieu: hoc sinh tim dung bai hoc phu hop.

Can lam:

- Full-text search theo title/description/content.
- Filter theo mon, level, thoi luong, rating.
- De xuat course theo tien do, muc tieu, lich hoc.
- Semantic search/AI tutor neu co thoi gian.

Ket qua hoan thanh:

- Hoc sinh khong bi lac trong thu vien bai hoc lon.

## 6. Nguyen tac quan trong

- Database luu cau truc, quyen, tien do, diem, metadata.
- Object storage luu file lon.
- Lesson nen la block-based content, khong nen la HTML thuan.
- Moi noi dung do user tao phai co status va moderation.
- Streak phai tinh theo ngay va timezone ro rang.
- Progress phai luu theo lesson/block, khong chi luu phan tram tong.
- Creator tot moi duoc publish nhanh, creator moi nen can duyet.

## 7. Viec nen bat dau ngay

Thu tu de lam tiep:

1. Scaffold app Next.js.
2. Cai Supabase client va ORM.
3. Tao migration schema Phase 0.
4. Tao seed data.
5. Lam UI course catalog va level map.
6. Lam lesson player block-based.

