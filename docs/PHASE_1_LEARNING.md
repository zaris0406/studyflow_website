# Phase 1 Learning Complete

## Implemented in the standalone app

- Catalog lists all built-in and approved creator courses.
- Course detail pages show a level map with locked, ready, retry, and passed lesson states.
- Lessons are block-based and support text, flashcard, image, video resource, multiple choice, and reflection blocks.
- Learners must answer all interactive blocks before finishing a lesson.
- Quiz score is calculated from graded multiple-choice blocks.
- A lesson is passed only when the learner scores at least 70%.
- Failed lessons are saved as retry-needed and do not unlock the next lesson.
- Passed lessons unlock the next lesson in order.
- Continue learning opens the next unlocked unpassed lesson.
- Course progress only counts passed lessons.
- Daily lesson stats only count passed lessons.

## Local storage model

The standalone app stores:

- `completedLessons[lessonId].status`: `passed` or `failed`
- `completedLessons[lessonId].score`: latest score
- `completedLessons[lessonId].completedAt`: timestamp only when passed
- `completedLessons[lessonId].lastAttemptAt`: latest attempt time
- `attempts[lessonId]`: attempt count

## Phase 1 acceptance checklist

- A learner can browse courses.
- A learner can open a course map.
- A learner can start an unlocked lesson.
- A locked lesson cannot be opened.
- A learner can answer quiz/reflection interactions.
- A learner must pass with at least 70% to unlock the next lesson.
- A failed lesson shows retry state.
- Course progress is based on passed lessons only.
