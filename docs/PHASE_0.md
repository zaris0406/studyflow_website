# Phase 0 Build Notes

## What is included

- PostgreSQL schema in `db/schema.sql`
- Standalone web app in `app/`
- Seed learning content inside `app/app.js`
- Local progress, streak, daily note, and daily tasks saved in browser `localStorage`

## Why the first version is standalone

The workspace started empty and PowerShell blocks `npm.ps1` by policy. A dependency-free first version lets the product flow run immediately while keeping the database schema ready for Supabase/PostgreSQL.

## Upgrade path

1. Move the seed courses from `app/app.js` into database seed scripts.
2. Replace localStorage progress with `lesson_progress`, `interaction_attempts`, `attendance_logs`, and `daily_tasks`.
3. Add Supabase Auth and map users to `profiles`.
4. Add Supabase Storage for thumbnails, lesson images, videos, PDFs, and creator uploads.
5. Put creator-created courses through `moderation_queue` before publishing.

## Acceptance checklist

- A student can browse courses.
- A student can open a course and see levels/lessons.
- A student can complete an interactive lesson.
- Completed lessons update progress.
- Daily check-in updates the streak.
- Daily tasks and notes can be edited locally.

## Account roles

The product now uses three roles only:

- `student`: learner experience.
- `teacher`: creator/studio experience.
- `admin`: moderation and platform quality.
