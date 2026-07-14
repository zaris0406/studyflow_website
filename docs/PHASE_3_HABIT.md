# Phase 3 Engagement And Habit Complete

## Implemented in the standalone app

- Today workspace has a daily dashboard with current streak, longest streak, lessons completed today, tasks completed today, focus minutes, and mood.
- The app recommends the next unlocked lesson in the learning plan.
- The learning plan can start the lesson immediately.
- The learning plan can create a linked study task for the next lesson.
- Daily tasks now have due date, priority, status, and optional link metadata.
- Task links can target no link, daily note, a course, a specific lesson, or the next lesson.
- Task completion updates the daily check-in streak.
- Manual check-in updates the Today dashboard, goal panel, and streak calendar immediately.
- Daily note now stores content, mood, and focus minutes.
- Updating the note or focus minutes counts as daily activity.
- Daily goals can be configured for lessons/day, tasks/day, and focus minutes/day.
- The goal panel shows progress toward the daily targets.
- The streak map shows the last 14 days with lesson/task activity.
- Existing localStorage tasks and notes are migrated to the new shape.

## Local storage model

The standalone app stores:

- `habitSettings`: daily lesson, task, and focus targets
- `tasks`: task title, due date, priority, linked course/lesson, status, completion time
- `notes`: date-keyed note content, mood, and focus minutes
- `checkins`: date keys used for streaks
- `completedLessons`: passed lesson timestamps used by the daily dashboard

## Backend mapping

When moving to Supabase/PostgreSQL:

- `habitSettings` -> `habit_settings`
- `notes[date].content` -> `daily_notes.content`
- `notes[date].mood` -> `daily_notes.mood`
- `notes[date].focusMinutes` -> `daily_notes.focus_minutes`
- `tasks[].priority` -> `daily_tasks.priority`
- `tasks[].linkType` -> `daily_tasks.link_type`
- linked course/lesson -> `daily_tasks.linked_course_id` and `daily_tasks.linked_lesson_id`
- check-ins -> `attendance_logs`
- streak aggregate -> `user_streaks`

## Phase 3 acceptance checklist

- A learner can see what to study today.
- A learner can start the next lesson from Today.
- A learner can create tasks linked to a course or lesson.
- A learner can complete tasks and maintain streak.
- A learner can record mood, focus minutes, and a note.
- Daily goals can be adjusted.
- The app shows a compact recent activity calendar.
- Old notes/tasks from Phase 1/2 still load.
