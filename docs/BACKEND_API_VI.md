# Backend API StudyFlow

## Muc tieu

Backend API dung de frontend khong luu du lieu quan trong trong `localStorage` nua. Browser chi goi API, con API moi noi MySQL bang username/password an toan tren server.

## Stack de deploy tren Namecheap

- PHP 8.x
- MySQL/MariaDB trong cPanel
- Session cookie HTTP-only
- PDO prepared statements

Thu muc API:

```text
api/
  config.sample.php
  config.php              # tao tren host, khong public password
  bootstrap.php
  register.php
  login.php
  logout.php
  me.php
  courses.php
  progress.php
  tasks.php
  notes.php
  classrooms.php
  assets.php
  reviews.php
  questions.php
  reports.php
  admin/
    courses.php
    users.php
    reports.php
```

## Backend xu ly nhu the nao

### 1. Dang ky

Endpoint:

```text
POST /api/register.php
```

Body:

```json
{
  "displayName": "An Nguyen",
  "email": "an@example.com",
  "password": "password123"
}
```

Backend:

1. Kiem tra email hop le va password >= 8 ky tu.
2. Check email da ton tai chua.
3. Hash password bang `password_hash`.
4. Tao user trong bang `profiles` voi role mac dinh `student`.
5. Luu `user_id` vao PHP session.
6. Tra ve profile user.

### 2. Dang nhap

Endpoint:

```text
POST /api/login.php
```

Backend:

1. Tim user theo email.
2. Kiem tra password bang `password_verify`.
3. Tao session moi bang `session_regenerate_id`.
4. Tra ve profile.

### 3. Lay profile dang dang nhap

Endpoint:

```text
GET /api/me.php
```

Backend:

1. Doc `user_id` trong session.
2. Lay profile trong database.
3. Tra ve `role`.
4. Frontend dua vao role de hien thi trang hoc sinh, giao vien, admin.

### 4. Cap nhat profile

Endpoint:

```text
PATCH /api/me.php
```

Backend chi cho sua:

- display name
- age
- school name
- class name
- email
- bio
- avatar url

Backend khong cho user tu sua `role`.

### 5. Tao bai giang

Endpoint:

```text
POST /api/courses.php
```

Role duoc goi:

- teacher
- admin

Backend:

1. Kiem tra session.
2. Kiem tra role.
3. Tao course status `pending_review`.
4. Tao levels.
5. Tao lessons.
6. Tao lesson blocks dang JSON.
7. Ghi audit log `course_submitted`.

### 6. Hoc sinh luu tien do

Endpoint:

```text
POST /api/progress.php
```

Backend:

1. Kiem tra user dang nhap.
2. Luu lesson_id, status, score.
3. Neu score >= 70 thi status `passed`.
4. Update lai neu da ton tai tien do lesson do.

### 7. Daily task

Endpoint:

```text
GET /api/tasks.php
POST /api/tasks.php
PATCH /api/tasks.php
```

Backend:

- GET: lay task cua user hien tai.
- POST: tao task moi.
- PATCH: doi status task.

### 8. Admin duyet course

Endpoint:

```text
GET /api/admin/courses.php
PATCH /api/admin/courses.php
```

Role duoc goi:

- admin

Backend:

1. Kiem tra role admin.
2. Lay danh sach course pending/published/archived.
3. Duyet course sang `published` hoac an sang `archived`.
4. Ghi audit log.

### 9. Admin doi role

Endpoint:

```text
GET /api/admin/users.php
PATCH /api/admin/users.php
```

Backend:

1. Chi admin duoc goi.
2. Admin doi role user thanh `student`, `teacher`, `admin`.
3. Frontend khong tu sua role trong Account.

## Deploy API len Namecheap

1. Tao database trong cPanel.
2. Import `db/namecheap_mysql_schema.sql` bang phpMyAdmin.
3. Upload thu muc `api` len ngang hang voi `index.html`.
4. Copy `api/config.sample.php` thanh `api/config.php`.
5. Dien dung database name, user, password.
6. Mo `https://domain.com/api/me.php`.
7. Neu chua dang nhap se tra `UNAUTHENTICATED`, nghia la API dang chay.

## Frontend se noi API nhu the nao

Hien tai frontend da co backend bridge trong trang `Settings`:

- `Check backend` goi `/api/health.php`.
- `Login backend` goi `/api/login.php`.
- `Register backend` goi `/api/register.php`.
- `Load /api/me` goi `/api/me.php`.
- Luu Account khi dang o provider `php-api` se goi `PATCH /api/me.php`.
- Hoan thanh lesson khi dang o provider `php-api` se goi `/api/progress.php`.
- Giao vien submit course khi dang o provider `php-api` se goi `/api/courses.php`.
- Daily task goi `/api/tasks.php`.
- Daily note goi `/api/notes.php`.
- Classroom goi `/api/classrooms.php`.
- Asset metadata goi `/api/assets.php`.
- Review/Q&A/report co endpoint `/api/reviews.php`, `/api/questions.php`, `/api/reports.php`.

Vi du:

```js
const response = await fetch("/api/me.php", {
  credentials: "include"
});
const data = await response.json();
```

Khi tao course:

```js
await fetch("/api/courses.php", {
  method: "POST",
  credentials: "include",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(courseDraft)
});
```

## Database nen dung loai gi

Cho LMS/CMS truc tuyen co user tao/sua bai hoc, nen dung relational database:

- Tot nhat: PostgreSQL/Supabase.
- Chap nhan duoc tren Namecheap: MySQL/MariaDB.

Ly do:

- Course, level, lesson, progress, classroom, role co quan he ro rang.
- Can transaction khi tao course gom nhieu level/lesson/block.
- Can query theo user, role, status, classroom.
- Can index va constraint de tranh du lieu hong.

File anh, video, PDF khong nen luu thang trong database. Nen luu trong object storage, database chi luu metadata va URL.
