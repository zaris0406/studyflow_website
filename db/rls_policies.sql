-- Supabase Row Level Security blueprint for StudyFlow.
-- Run after db/schema.sql and after wiring auth.users -> profiles.id or profiles.auth_user_id.
-- This file assumes profiles.id maps to auth.uid() in the production app.

alter table profiles enable row level security;
alter table assets enable row level security;
alter table courses enable row level security;
alter table creator_drafts enable row level security;
alter table course_levels enable row level security;
alter table lessons enable row level security;
alter table lesson_blocks enable row level security;
alter table enrollments enable row level security;
alter table classrooms enable row level security;
alter table classroom_students enable row level security;
alter table classroom_assignments enable row level security;
alter table lesson_progress enable row level security;
alter table interaction_attempts enable row level security;
alter table course_reviews enable row level security;
alter table lesson_questions enable row level security;
alter table lesson_answers enable row level security;
alter table moderation_queue enable row level security;
alter table attendance_logs enable row level security;
alter table user_streaks enable row level security;
alter table daily_notes enable row level security;
alter table daily_tasks enable row level security;
alter table habit_settings enable row level security;
alter table learning_queue enable row level security;
alter table tutor_interactions enable row level security;
alter table course_search_documents enable row level security;
alter table audit_logs enable row level security;

create or replace function current_role_name()
returns user_role
language sql
stable
as $$
  select role from profiles where id = auth.uid()
$$;

create or replace function is_teacher_or_admin()
returns boolean
language sql
stable
as $$
  select current_role_name() in ('teacher', 'admin')
$$;

create or replace function is_admin()
returns boolean
language sql
stable
as $$
  select current_role_name() = 'admin'
$$;

create policy "Profiles can read own profile"
on profiles for select
using (id = auth.uid() or is_admin());

create policy "Profiles can update own profile"
on profiles for update
using (id = auth.uid())
with check (id = auth.uid());

-- Role changes must go through an admin/backend path. Authenticated users may edit
-- profile fields, but not role, reputation, or verification flags from the client.
revoke update on profiles from authenticated;
grant update(display_name, age, school_name, class_name, email, avatar_url, bio)
on profiles to authenticated;

create policy "Published courses are visible"
on courses for select
using (status = 'published' or author_id = auth.uid() or is_admin());

create policy "Teachers can create courses"
on courses for insert
with check (is_teacher_or_admin() and author_id = auth.uid());

create policy "Authors can update own draft courses"
on courses for update
using (author_id = auth.uid() or is_admin())
with check (author_id = auth.uid() or is_admin());

create policy "Course children visible with course"
on course_levels for select
using (exists (select 1 from courses c where c.id = course_id and (c.status = 'published' or c.author_id = auth.uid() or is_admin())));

create policy "Lesson children visible with course"
on lessons for select
using (
  exists (
    select 1
    from course_levels cl
    join courses c on c.id = cl.course_id
    where cl.id = lessons.level_id
      and (c.status = 'published' or c.author_id = auth.uid() or is_admin())
  )
);

create policy "Lesson blocks visible with lesson"
on lesson_blocks for select
using (
  exists (
    select 1
    from lessons l
    join course_levels cl on cl.id = l.level_id
    join courses c on c.id = cl.course_id
    where l.id = lesson_blocks.lesson_id
      and (c.status = 'published' or c.author_id = auth.uid() or is_admin())
  )
);

create policy "Users manage own progress"
on lesson_progress for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Users manage own attempts"
on interaction_attempts for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Users manage own daily notes"
on daily_notes for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Users manage own daily tasks"
on daily_tasks for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Users manage own queue"
on learning_queue for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Users manage own tutor interactions"
on tutor_interactions for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Teachers manage own classrooms"
on classrooms for all
using (teacher_id = auth.uid() or created_by = auth.uid() or is_admin())
with check (teacher_id = auth.uid() or created_by = auth.uid() or is_admin());

create policy "Students can read joined classrooms"
on classroom_students for select
using (student_id = auth.uid() or is_teacher_or_admin());

create policy "Teachers manage classroom students"
on classroom_students for all
using (
  is_admin() or exists (
    select 1 from classrooms c
    where c.id = classroom_students.classroom_id
      and (c.teacher_id = auth.uid() or c.created_by = auth.uid())
  )
)
with check (
  is_admin() or exists (
    select 1 from classrooms c
    where c.id = classroom_students.classroom_id
      and (c.teacher_id = auth.uid() or c.created_by = auth.uid())
  )
);

create policy "Teachers manage classroom assignments"
on classroom_assignments for all
using (
  is_admin() or exists (
    select 1 from classrooms c
    where c.id = classroom_assignments.classroom_id
      and (c.teacher_id = auth.uid() or c.created_by = auth.uid())
  )
)
with check (
  is_admin() or exists (
    select 1 from classrooms c
    where c.id = classroom_assignments.classroom_id
      and (c.teacher_id = auth.uid() or c.created_by = auth.uid())
  )
);

create policy "Reviews are readable"
on course_reviews for select
using (true);

create policy "Users manage own reviews"
on course_reviews for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "Questions are readable"
on lesson_questions for select
using (true);

create policy "Users create own questions"
on lesson_questions for insert
with check (user_id = auth.uid());

create policy "Answers are readable"
on lesson_answers for select
using (true);

create policy "Users create own answers"
on lesson_answers for insert
with check (user_id = auth.uid());

create policy "Admins manage moderation queue"
on moderation_queue for all
using (is_admin())
with check (is_admin());

create policy "Admins read audit logs"
on audit_logs for select
using (is_admin());
