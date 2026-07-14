<?php
declare(strict_types=1);
require __DIR__ . '/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $user = current_user();
    $isStaff = $user && in_array($user['role'], ['teacher', 'admin'], true);
    $sql = 'select id, author_id, title, slug, subject, difficulty, description, thumbnail_url, status, created_at, updated_at from courses';
    $params = [];

    if (!$isStaff) {
        $sql .= " where status = 'published'";
    }

    $sql .= ' order by created_at desc';
    $stmt = db()->prepare($sql);
    $stmt->execute($params);
    $courses = $stmt->fetchAll();
    foreach ($courses as &$course) {
        $levelsStmt = db()->prepare('select id, title, sort_order from course_levels where course_id = ? order by sort_order asc, id asc');
        $levelsStmt->execute([(int)$course['id']]);
        $levels = $levelsStmt->fetchAll();
        foreach ($levels as &$level) {
            $lessonStmt = db()->prepare('select id, title, minutes, sort_order from lessons where level_id = ? order by sort_order asc, id asc');
            $lessonStmt->execute([(int)$level['id']]);
            $lessons = $lessonStmt->fetchAll();
            foreach ($lessons as &$lesson) {
                $blockStmt = db()->prepare('select id, block_type, content_json, sort_order from lesson_blocks where lesson_id = ? order by sort_order asc, id asc');
                $blockStmt->execute([(int)$lesson['id']]);
                $blocks = [];
                foreach ($blockStmt->fetchAll() as $block) {
                    $content = json_decode((string)$block['content_json'], true);
                    if (!is_array($content)) {
                        $content = [];
                    }
                    $content['type'] = $content['type'] ?? $block['block_type'];
                    $content['backendBlockId'] = (int)$block['id'];
                    $blocks[] = $content;
                }
                $lesson['blocks'] = $blocks;
            }
            $level['lessons'] = $lessons;
        }
        $course['levels'] = $levels;
    }
    unset($course, $level, $lesson);
    respond(['courses' => $courses]);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = require_role(['teacher', 'admin']);
    $data = json_input();

    $title = trim((string)($data['title'] ?? ''));
    $slug = trim((string)($data['slug'] ?? ''));
    $subject = trim((string)($data['subject'] ?? 'General'));
    $difficulty = trim((string)($data['difficulty'] ?? 'Beginner'));
    $description = trim((string)($data['description'] ?? ''));
    $levels = $data['levels'] ?? [];
    $requestedStatus = trim((string)($data['status'] ?? ''));
    $status = $user['role'] === 'admin' && in_array($requestedStatus, ['draft', 'pending_review', 'published', 'archived'], true)
        ? $requestedStatus
        : 'pending_review';

    if ($title === '' || $slug === '' || !is_array($levels) || count($levels) === 0) {
        respond(['error' => 'VALIDATION_ERROR', 'message' => 'title, slug, and at least one level are required.'], 422);
    }

    $pdo = db();
    $pdo->beginTransaction();
    try {
        $existingStmt = $pdo->prepare('select id, author_id from courses where slug = ? limit 1');
        $existingStmt->execute([$slug]);
        $existing = $existingStmt->fetch();
        $thumbnailUrl = trim((string)($data['thumbnailUrl'] ?? ''));

        if ($existing) {
            if ($user['role'] !== 'admin' && (int)$existing['author_id'] !== (int)$user['id']) {
                respond(['error' => 'FORBIDDEN', 'message' => 'Only the original teacher or admin can replace this course.'], 403);
            }
            $courseId = (int)$existing['id'];
            $stmt = $pdo->prepare(
                'update courses
                 set author_id = ?, title = ?, subject = ?, difficulty = ?, description = ?, thumbnail_url = ?, status = ?
                 where id = ?'
            );
            $stmt->execute([
                $user['id'],
                $title,
                $subject,
                $difficulty,
                $description,
                $thumbnailUrl,
                $status,
                $courseId,
            ]);
            $deleteLevels = $pdo->prepare('delete from course_levels where course_id = ?');
            $deleteLevels->execute([$courseId]);
        } else {
            $stmt = $pdo->prepare(
                'insert into courses (author_id, title, slug, subject, difficulty, description, thumbnail_url, status)
                 values (?, ?, ?, ?, ?, ?, ?, ?)'
            );
            $stmt->execute([
                $user['id'],
                $title,
                $slug,
                $subject,
                $difficulty,
                $description,
                $thumbnailUrl,
                $status,
            ]);
            $courseId = (int)$pdo->lastInsertId();
        }

        foreach ($levels as $levelIndex => $level) {
            $levelTitle = trim((string)($level['title'] ?? 'Untitled level'));
            $stmt = $pdo->prepare('insert into course_levels (course_id, title, sort_order) values (?, ?, ?)');
            $stmt->execute([$courseId, $levelTitle, $levelIndex]);
            $levelId = (int)$pdo->lastInsertId();

            $lessons = is_array($level['lessons'] ?? null) ? $level['lessons'] : [];
            foreach ($lessons as $lessonIndex => $lesson) {
                $lessonTitle = trim((string)($lesson['title'] ?? 'Untitled lesson'));
                $stmt = $pdo->prepare('insert into lessons (level_id, title, minutes, sort_order) values (?, ?, ?, ?)');
                $stmt->execute([$levelId, $lessonTitle, (int)($lesson['minutes'] ?? 8), $lessonIndex]);
                $lessonId = (int)$pdo->lastInsertId();

                $blocks = is_array($lesson['blocks'] ?? null) ? $lesson['blocks'] : [];
                foreach ($blocks as $blockIndex => $block) {
                    $blockType = (string)($block['type'] ?? 'text');
                    $content = json_encode($block, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
                    $stmt = $pdo->prepare('insert into lesson_blocks (lesson_id, block_type, content_json, sort_order) values (?, ?, ?, ?)');
                    $stmt->execute([$lessonId, $blockType, $content, $blockIndex]);
                }
            }
        }

        $stmt = $pdo->prepare('insert into audit_logs (actor_id, actor_role, action, body) values (?, ?, ?, ?)');
        $stmt->execute([$user['id'], $user['role'], $existing ? 'course_replaced' : 'course_submitted', $title]);
        $pdo->commit();
        respond(['courseId' => $courseId, 'slug' => $slug, 'status' => $status], $existing ? 200 : 201);
    } catch (Throwable $error) {
        $pdo->rollBack();
        respond(['error' => 'CREATE_COURSE_FAILED', 'message' => $error->getMessage()], 500);
    }
}

respond(['error' => 'METHOD_NOT_ALLOWED'], 405);
