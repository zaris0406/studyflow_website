-- Phase 0 database foundation for the LMS/CMS learning platform.
-- Target: PostgreSQL / Supabase.

create extension if not exists "uuid-ossp";

create type user_role as enum ('student', 'teacher_pending', 'teacher', 'admin');
create type publish_status as enum ('draft', 'pending_review', 'published', 'archived');
create type progress_status as enum ('not_started', 'in_progress', 'passed', 'failed');
create type task_status as enum ('todo', 'doing', 'done', 'skipped');
create type moderation_status as enum ('pending', 'approved', 'rejected');
create type block_type as enum (
  'text',
  'image',
  'video_embed',
  'multiple_choice',
  'short_answer',
  'flashcard',
  'matching',
  'reflection',
  'mini_game'
);

create table profiles (
  id uuid primary key default uuid_generate_v4(),
  display_name text not null,
  age integer,
  school_name text,
  class_name text,
  email text unique,
  email_verified boolean not null default false,
  avatar_url text,
  bio text,
  reputation_score integer not null default 0,
  role user_role not null default 'student',
  created_at timestamptz not null default now()
);

comment on column profiles.role is 'Production role source for UI rendering. Change this in database/admin backend, not in the public account form.';
comment on column profiles.email_verified is 'Mirrors auth provider verification status. Passwords must stay in Supabase Auth or another auth provider.';

create table creator_applications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  evidence jsonb not null default '{}',
  status moderation_status not null default 'pending',
  reviewed_by uuid references profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table assets (
  id uuid primary key default uuid_generate_v4(),
  owner_id uuid references profiles(id) on delete set null,
  bucket text not null,
  path text not null,
  mime_type text not null,
  size_bytes bigint not null default 0,
  alt_text text,
  created_at timestamptz not null default now(),
  unique(bucket, path)
);

create table courses (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text not null unique,
  description text not null,
  subject text not null,
  difficulty text not null,
  thumbnail_asset_id uuid references assets(id) on delete set null,
  author_id uuid references profiles(id) on delete set null,
  version_number integer not null default 1,
  version_of_course_id uuid references courses(id) on delete set null,
  review_mode text not null default 'manual',
  status publish_status not null default 'draft',
  rating_avg numeric(3,2) not null default 0,
  rating_count integer not null default 0,
  search_vector tsvector generated always as (
    setweight(to_tsvector('simple', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('simple', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('simple', coalesce(subject, '')), 'C')
  ) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index courses_search_idx on courses using gin(search_vector);
create index courses_status_subject_idx on courses(status, subject, difficulty);
create index courses_version_idx on courses(version_of_course_id, version_number);

create table creator_drafts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  editing_submission_id uuid,
  revision_of_course_id uuid references courses(id) on delete set null,
  draft_json jsonb not null,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table course_levels (
  id uuid primary key default uuid_generate_v4(),
  course_id uuid not null references courses(id) on delete cascade,
  title text not null,
  level_order integer not null,
  unlock_rule jsonb not null default '{"type":"previous_level_passed"}',
  pass_score integer not null default 70,
  unique(course_id, level_order)
);

create table lessons (
  id uuid primary key default uuid_generate_v4(),
  level_id uuid not null references course_levels(id) on delete cascade,
  title text not null,
  lesson_order integer not null,
  estimated_minutes integer not null default 8,
  content_schema_version integer not null default 1,
  status publish_status not null default 'draft',
  unique(level_id, lesson_order)
);

create table lesson_blocks (
  id uuid primary key default uuid_generate_v4(),
  lesson_id uuid not null references lessons(id) on delete cascade,
  block_order integer not null,
  type block_type not null,
  data_json jsonb not null,
  points integer not null default 0,
  unique(lesson_id, block_order)
);

create table enrollments (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  course_id uuid not null references courses(id) on delete cascade,
  status text not null default 'active',
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  unique(user_id, course_id)
);

create table classrooms (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  invite_code text unique,
  teacher_id uuid references profiles(id) on delete set null,
  created_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table classroom_students (
  id uuid primary key default uuid_generate_v4(),
  classroom_id uuid not null references classrooms(id) on delete cascade,
  student_id uuid references profiles(id) on delete cascade,
  display_name text,
  joined_at timestamptz not null default now(),
  unique(classroom_id, student_id)
);

create table classroom_assignments (
  id uuid primary key default uuid_generate_v4(),
  classroom_id uuid not null references classrooms(id) on delete cascade,
  course_id uuid not null references courses(id) on delete cascade,
  assigned_by uuid references profiles(id) on delete set null,
  due_date date,
  created_at timestamptz not null default now(),
  unique(classroom_id, course_id)
);

create index classrooms_teacher_idx on classrooms(teacher_id);
create index classrooms_invite_code_idx on classrooms(invite_code);
create index classroom_students_student_idx on classroom_students(student_id);
create index classroom_assignments_course_idx on classroom_assignments(course_id);

create table audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid references profiles(id) on delete set null,
  actor_role user_role,
  action text not null,
  detail text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index audit_logs_action_idx on audit_logs(action, created_at desc);

create table lesson_progress (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  status progress_status not null default 'not_started',
  score integer not null default 0,
  attempts_count integer not null default 0,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  unique(user_id, lesson_id)
);

create table interaction_attempts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  lesson_block_id uuid not null references lesson_blocks(id) on delete cascade,
  answer_json jsonb not null default '{}',
  is_correct boolean,
  score integer not null default 0,
  created_at timestamptz not null default now()
);

create table course_reviews (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  course_id uuid not null references courses(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  comment text,
  created_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table lesson_questions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  body text not null,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table lesson_answers (
  id uuid primary key default uuid_generate_v4(),
  question_id uuid not null references lesson_questions(id) on delete cascade,
  user_id uuid not null references profiles(id) on delete cascade,
  body text not null,
  is_accepted boolean not null default false,
  created_at timestamptz not null default now()
);

create table moderation_queue (
  id uuid primary key default uuid_generate_v4(),
  target_type text not null,
  target_id uuid not null,
  status moderation_status not null default 'pending',
  title text,
  reason text,
  reviewed_by uuid references profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table attendance_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  checkin_date date not null,
  source text not null default 'manual',
  created_at timestamptz not null default now(),
  unique(user_id, checkin_date)
);

create table user_streaks (
  user_id uuid primary key references profiles(id) on delete cascade,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_checkin_date date
);

create table daily_notes (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  note_date date not null,
  content text not null default '',
  mood text,
  focus_minutes integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, note_date)
);

create table daily_tasks (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  title text not null,
  description text,
  due_date date not null,
  priority text not null default 'normal',
  status task_status not null default 'todo',
  link_type text not null default 'none',
  linked_course_id uuid references courses(id) on delete set null,
  linked_lesson_id uuid references lessons(id) on delete set null,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table habit_settings (
  user_id uuid primary key references profiles(id) on delete cascade,
  daily_lesson_goal integer not null default 1,
  daily_task_goal integer not null default 3,
  focus_minute_goal integer not null default 25,
  search_preferences jsonb not null default '{"difficulty":"All","duration":"All","sort":"recommended"}',
  updated_at timestamptz not null default now()
);

create table learning_queue (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  course_id uuid not null references courses(id) on delete cascade,
  queue_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique(user_id, course_id)
);

create table tutor_interactions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references profiles(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  question text not null,
  answer text not null,
  created_at timestamptz not null default now()
);

create table course_search_documents (
  course_id uuid primary key references courses(id) on delete cascade,
  search_text text not null,
  metadata jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

-- Supabase RLS should be enabled when deployed.
-- Example:
-- alter table courses enable row level security;
-- create policy "Published courses are visible" on courses
--   for select using (status = 'published');
