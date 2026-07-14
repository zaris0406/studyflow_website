# Phase 4 Community And Quality Complete

## Implemented in the standalone app

- Course detail pages now include a community review panel.
- Learners can submit or update a course review with rating, quality signal, and comment.
- Course rating average and count are calculated from local reviews.
- Learners can report a course from the review panel.
- Lesson pages now include a Q&A panel below the lesson player.
- Learners can ask lesson questions.
- Learners can answer questions.
- Answers can be marked accepted, which closes the question as answered.
- Learners can report a lesson from the Q&A panel.
- Studio moderation now includes content reports as well as course submissions.
- Reports can be resolved or dismissed.
- Review, Q&A, report resolution, and report dismissal update creator reputation.
- User-created review, question, answer, and report text is escaped before rendering.

## Local storage model

The standalone app stores:

- `courseReviews`: course-id keyed review arrays
- `lessonQuestions`: lesson-id keyed question threads
- `contentReports`: report queue and report outcomes
- `creatorProfile.reputationScore`: community quality reputation signal

## Backend mapping

When moving to Supabase/PostgreSQL:

- Course reviews -> `course_reviews`
- Lesson questions -> `lesson_questions`
- Lesson answers -> `lesson_answers`
- Course and lesson reports -> `moderation_queue`
- Report title -> `moderation_queue.title`
- Report reason -> `moderation_queue.reason`
- Question accepted answer -> `lesson_answers.is_accepted`
- Creator quality updates -> `profiles.reputation_score`

## Phase 4 acceptance checklist

- A learner can review a course.
- A learner can see course rating state.
- A learner can ask a lesson question.
- A learner can answer a lesson question.
- A learner can accept an answer.
- A learner can report a course or lesson.
- A moderator can resolve or dismiss reports.
- Community actions affect reputation.
