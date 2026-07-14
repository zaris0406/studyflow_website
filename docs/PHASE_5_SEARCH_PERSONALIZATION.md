# Phase 5 Search And Personalization Complete

## Implemented in the standalone app

- Course catalog has advanced filters for subject, difficulty, duration, and sort mode.
- Search now indexes course title, subject, difficulty, description, lesson titles, and lesson block content.
- Duration buckets classify courses into short, medium, and long.
- Sort modes include recommended, highest rated, in progress, and newest.
- Recommended ranking uses progress, preferred subjects, ratings, queue status, and query match.
- Catalog cards show rating state and have a queue action.
- Learning queue stores selected courses in localStorage.
- Learning queue supports removing individual queued courses.
- Learning queue supports clearing the full queue.
- Recommendation panel shows queued courses and suggested next courses.
- Today plan continues to use the next unlocked lesson.
- Lesson page includes a local tutor prompt panel.
- Tutor prompt produces a guided explanation from the current lesson text and quiz explanation.
- Tutor prompt history is stored locally per lesson and shows recent tutor notes.

## Local storage model

The standalone app stores:

- `searchPrefs`: difficulty, duration, and sort preferences
- `learningQueue`: ordered course IDs selected by the learner
- `tutorInteractions`: recent local tutor prompts and generated guide text
- existing progress/review data used for personalization

## Backend mapping

When moving to Supabase/PostgreSQL:

- Search preferences -> `habit_settings.search_preferences`
- Learning queue -> `learning_queue`
- Tutor interactions -> `tutor_interactions`
- Search index document -> `course_search_documents`
- Course filtering -> `courses.subject`, `courses.difficulty`, duration derived from lessons
- Full-text search -> `courses.search_vector` plus indexed lesson block text
- Semantic search later -> add embeddings to `course_search_documents.metadata` or a pgvector column

## Phase 5 acceptance checklist

- A learner can search across course and lesson content.
- A learner can filter by subject, difficulty, and duration.
- A learner can sort by recommendation, rating, progress, or newest.
- A learner can add courses to a queue.
- A learner can remove courses from the queue.
- A learner can open recommended courses from the recommendation panel.
- A learner can ask for local tutor guidance inside a lesson.
- A learner can see recent tutor prompt history for the lesson.
