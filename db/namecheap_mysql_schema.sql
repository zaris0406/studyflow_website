-- StudyFlow core schema for Namecheap cPanel MySQL / MariaDB.
-- Import this with phpMyAdmin only if you choose the Namecheap MySQL path.
-- The current web demo is static and does not connect to this database yet.

create table if not exists profiles (
  id bigint unsigned primary key auto_increment,
  display_name varchar(160) not null,
  age int null,
  school_name varchar(220) null,
  class_name varchar(120) null,
  email varchar(220) unique,
  email_verified tinyint(1) not null default 0,
  avatar_url text null,
  bio text null,
  reputation_score int not null default 0,
  role enum('student', 'teacher_pending', 'teacher', 'admin') not null default 'student',
  password_hash varchar(255) null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp null default null on update current_timestamp
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists courses (
  id bigint unsigned primary key auto_increment,
  author_id bigint unsigned null,
  title varchar(220) not null,
  slug varchar(240) not null unique,
  subject varchar(120) not null,
  difficulty varchar(80) not null,
  description text null,
  thumbnail_url text null,
  status enum('draft', 'pending_review', 'published', 'archived') not null default 'draft',
  created_at timestamp not null default current_timestamp,
  updated_at timestamp null default null on update current_timestamp,
  constraint courses_author_fk foreign key (author_id) references profiles(id) on delete set null
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists course_levels (
  id bigint unsigned primary key auto_increment,
  course_id bigint unsigned not null,
  title varchar(220) not null,
  sort_order int not null default 0,
  constraint course_levels_course_fk foreign key (course_id) references courses(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists lessons (
  id bigint unsigned primary key auto_increment,
  level_id bigint unsigned not null,
  title varchar(220) not null,
  minutes int not null default 8,
  sort_order int not null default 0,
  constraint lessons_level_fk foreign key (level_id) references course_levels(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists lesson_blocks (
  id bigint unsigned primary key auto_increment,
  lesson_id bigint unsigned not null,
  block_type enum('text','image','video_embed','multiple_choice','short_answer','flashcard','matching','reflection','mini_game') not null,
  content_json json not null,
  sort_order int not null default 0,
  constraint lesson_blocks_lesson_fk foreign key (lesson_id) references lessons(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists enrollments (
  id bigint unsigned primary key auto_increment,
  user_id bigint unsigned not null,
  course_id bigint unsigned not null,
  created_at timestamp not null default current_timestamp,
  unique key unique_enrollment (user_id, course_id),
  constraint enrollments_user_fk foreign key (user_id) references profiles(id) on delete cascade,
  constraint enrollments_course_fk foreign key (course_id) references courses(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists lesson_progress (
  id bigint unsigned primary key auto_increment,
  user_id bigint unsigned not null,
  lesson_id bigint unsigned not null,
  status enum('not_started','in_progress','passed','failed') not null default 'not_started',
  score int not null default 0,
  completed_at timestamp null,
  updated_at timestamp null default null on update current_timestamp,
  unique key unique_lesson_progress (user_id, lesson_id),
  constraint lesson_progress_user_fk foreign key (user_id) references profiles(id) on delete cascade,
  constraint lesson_progress_lesson_fk foreign key (lesson_id) references lessons(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists classrooms (
  id bigint unsigned primary key auto_increment,
  teacher_id bigint unsigned null,
  name varchar(220) not null,
  invite_code varchar(40) not null unique,
  created_at timestamp not null default current_timestamp,
  constraint classrooms_teacher_fk foreign key (teacher_id) references profiles(id) on delete set null
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists classroom_students (
  classroom_id bigint unsigned not null,
  student_id bigint unsigned not null,
  joined_at timestamp not null default current_timestamp,
  primary key (classroom_id, student_id),
  constraint classroom_students_classroom_fk foreign key (classroom_id) references classrooms(id) on delete cascade,
  constraint classroom_students_student_fk foreign key (student_id) references profiles(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists classroom_assignments (
  id bigint unsigned primary key auto_increment,
  classroom_id bigint unsigned not null,
  course_id bigint unsigned not null,
  assigned_by bigint unsigned null,
  due_date date null,
  created_at timestamp not null default current_timestamp,
  constraint classroom_assignments_classroom_fk foreign key (classroom_id) references classrooms(id) on delete cascade,
  constraint classroom_assignments_course_fk foreign key (course_id) references courses(id) on delete cascade,
  constraint classroom_assignments_user_fk foreign key (assigned_by) references profiles(id) on delete set null
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists daily_tasks (
  id bigint unsigned primary key auto_increment,
  user_id bigint unsigned not null,
  title varchar(240) not null,
  status enum('todo','doing','done','skipped') not null default 'todo',
  due_date date null,
  created_at timestamp not null default current_timestamp,
  constraint daily_tasks_user_fk foreign key (user_id) references profiles(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists daily_notes (
  id bigint unsigned primary key auto_increment,
  user_id bigint unsigned not null,
  note_date date not null,
  content text null,
  mood varchar(80) null,
  focus_minutes int not null default 0,
  unique key unique_daily_note (user_id, note_date),
  constraint daily_notes_user_fk foreign key (user_id) references profiles(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists audit_logs (
  id bigint unsigned primary key auto_increment,
  actor_id bigint unsigned null,
  actor_role enum('student', 'teacher', 'admin') null,
  action varchar(160) not null,
  body text null,
  created_at timestamp not null default current_timestamp,
  constraint audit_logs_actor_fk foreign key (actor_id) references profiles(id) on delete set null
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create index courses_status_idx on courses(status);
create index lesson_progress_user_idx on lesson_progress(user_id);
create index audit_logs_action_idx on audit_logs(action, created_at);

create table if not exists assets (
  id bigint unsigned primary key auto_increment,
  owner_id bigint unsigned null,
  name varchar(220) not null,
  asset_type varchar(80) not null default 'image',
  mime_type varchar(160) null,
  size_bytes bigint unsigned not null default 0,
  url text not null,
  alt_text varchar(255) null,
  created_at timestamp not null default current_timestamp,
  constraint assets_owner_fk foreign key (owner_id) references profiles(id) on delete set null
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists course_reviews (
  id bigint unsigned primary key auto_increment,
  course_id bigint unsigned not null,
  user_id bigint unsigned not null,
  rating int not null,
  comment text null,
  created_at timestamp not null default current_timestamp,
  unique key unique_course_review (course_id, user_id),
  constraint course_reviews_course_fk foreign key (course_id) references courses(id) on delete cascade,
  constraint course_reviews_user_fk foreign key (user_id) references profiles(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists lesson_questions (
  id bigint unsigned primary key auto_increment,
  lesson_id bigint unsigned not null,
  user_id bigint unsigned not null,
  body text not null,
  status enum('open','answered','closed') not null default 'open',
  created_at timestamp not null default current_timestamp,
  constraint lesson_questions_lesson_fk foreign key (lesson_id) references lessons(id) on delete cascade,
  constraint lesson_questions_user_fk foreign key (user_id) references profiles(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists lesson_answers (
  id bigint unsigned primary key auto_increment,
  question_id bigint unsigned not null,
  user_id bigint unsigned not null,
  body text not null,
  accepted tinyint(1) not null default 0,
  created_at timestamp not null default current_timestamp,
  constraint lesson_answers_question_fk foreign key (question_id) references lesson_questions(id) on delete cascade,
  constraint lesson_answers_user_fk foreign key (user_id) references profiles(id) on delete cascade
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create table if not exists content_reports (
  id bigint unsigned primary key auto_increment,
  reporter_id bigint unsigned null,
  target_type enum('course','lesson','question','answer') not null,
  target_id bigint unsigned not null,
  reason varchar(255) not null,
  status enum('pending','resolved','dismissed') not null default 'pending',
  created_at timestamp not null default current_timestamp,
  resolved_at timestamp null,
  constraint content_reports_reporter_fk foreign key (reporter_id) references profiles(id) on delete set null
) default charset=utf8mb4 collate=utf8mb4_unicode_ci;

create index assets_owner_idx on assets(owner_id);
create index course_reviews_course_idx on course_reviews(course_id);
create index lesson_questions_lesson_idx on lesson_questions(lesson_id);
create index content_reports_status_idx on content_reports(status, created_at);
