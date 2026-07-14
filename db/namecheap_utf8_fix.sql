-- Run this once in phpMyAdmin if Vietnamese text shows as ? or broken characters.
-- This fixes table charset for future saves across lessons, courses, Q&A, assets, and users.
-- Important: text already saved as literal ? cannot be recovered by SQL; re-upload the course after this fix.

set names utf8mb4 collate utf8mb4_unicode_ci;

alter table profiles convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table courses convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table course_levels convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table lessons convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table lesson_blocks convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table enrollments convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table lesson_progress convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table classrooms convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table classroom_students convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table classroom_assignments convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table daily_tasks convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table daily_notes convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table audit_logs convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table assets convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table course_reviews convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table lesson_questions convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table lesson_answers convert to character set utf8mb4 collate utf8mb4_unicode_ci;
alter table content_reports convert to character set utf8mb4 collate utf8mb4_unicode_ci;

alter table profiles modify display_name varchar(160) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table profiles modify school_name varchar(220) character set utf8mb4 collate utf8mb4_unicode_ci null;
alter table profiles modify class_name varchar(120) character set utf8mb4 collate utf8mb4_unicode_ci null;
alter table profiles modify email varchar(220) character set utf8mb4 collate utf8mb4_unicode_ci null;
alter table courses modify title varchar(220) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table courses modify slug varchar(240) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table courses modify subject varchar(120) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table courses modify difficulty varchar(80) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table courses modify description text character set utf8mb4 collate utf8mb4_unicode_ci null;
alter table course_levels modify title varchar(220) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table lessons modify title varchar(220) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table assets modify name varchar(220) character set utf8mb4 collate utf8mb4_unicode_ci not null;
alter table assets modify alt_text varchar(255) character set utf8mb4 collate utf8mb4_unicode_ci null;
