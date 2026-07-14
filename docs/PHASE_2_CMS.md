# Phase 2 CMS Complete

## Implemented in the standalone app

- Creator Studio supports a full course draft model.
- Drafts include course metadata, difficulty, description, optional thumbnail, levels, lessons, and lesson blocks.
- Creator can add and remove levels.
- Creator can add and remove lessons inside the selected level.
- Creator can edit the selected level title, selected lesson title, and lesson duration.
- Lesson block editor supports text, quiz, reflection, image, and video resource blocks.
- Blocks can be moved up or down and removed.
- Thumbnail and image blocks accept local image uploads and store data URLs in localStorage.
- Draft autosave stores the current working draft in localStorage.
- Creator can manually save or reset the working draft.
- Pending and rejected submissions can be edited and resubmitted.
- Moderation queue supports approve and reject actions.
- Approved submissions become playable courses in the catalog.
- Approved courses can be opened directly from the moderation queue.
- Approved courses can create a new revision draft instead of mutating the published course.
- Revision approval publishes a new versioned course, preserving old lesson IDs and progress.
- Creator reputation controls submission:
  - below 60: cannot submit
  - 60 to 89: standard moderation
  - 90 and above: trusted auto-publish
- Approvals increase creator reputation.
- Rejections decrease creator reputation.
- User-created text is escaped before rendering.

## Local storage model

The standalone app stores the following in browser `localStorage`:

- `studioDraft`: autosaved creator draft
- `studioSubmissions`: moderation queue and submission history
- `customCourses`: approved courses and revisions
- `creatorProfile`: reputation and review outcomes
- `completedLessons`, `attempts`, `checkins`, `tasks`, `notes`

## Backend mapping

When moving to Supabase/PostgreSQL:

- Autosaved draft -> `creator_drafts.draft_json`
- Submitted course -> `courses`, `course_levels`, `lessons`, `lesson_blocks`
- Thumbnail and image uploads -> `assets` + Supabase Storage
- Video block -> `lesson_blocks.data_json.url`
- Moderation queue -> `moderation_queue`
- Approve action -> update course records to `published`
- Reject action -> keep draft/submission records and mark moderation status as `rejected`
- Reputation score -> `profiles.reputation_score`
- Versioning -> `courses.version_number` and `courses.version_of_course_id`

## Phase 2 acceptance checklist

- A creator can build more than one level.
- A creator can build more than one lesson.
- A creator can add multiple block types.
- A creator can upload lesson media locally.
- A draft survives page refresh.
- A pending draft can be edited.
- A rejected draft can be edited and resubmitted.
- A moderator can approve or reject.
- Approval publishes a playable course.
- A published course can be revised without overwriting the original.
- Reputation gates affect submission flow.
