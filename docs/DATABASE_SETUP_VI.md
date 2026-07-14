# Setup database cho StudyFlow

## Ket luan nhanh

Tao database thi don gian. Noi web vao database that thi khong chi la upload SQL, vi ban web hien tai la static HTML/CSS/JS va dang luu bang `localStorage`.

Khong nen cho frontend static ket noi thang vao MySQL/PostgreSQL, vi se lo username, password va quyen database trong browser.

## Co 2 huong

### Huong A: Supabase, nen dung neu muon nhanh va dung voi schema hien tai

Phu hop vi project da co PostgreSQL schema va RLS:

- `db/schema.sql`
- `db/rls_policies.sql`
- `db/storage_policies.sql`

Can lam:

1. Tao project Supabase.
2. Mo SQL Editor.
3. Chay `db/schema.sql`.
4. Tao bucket `lesson-assets`.
5. Chay `db/storage_policies.sql`.
6. Chay `db/rls_policies.sql`.
7. Chuyen frontend sang Next.js hoac them backend API de noi Supabase Auth.

Uu diem:

- Co Auth san.
- Co role/RLS tot hon.
- Hop voi 3 role student, teacher, admin.
- De lam file upload hon.

### Huong B: Namecheap MySQL/cPanel

Phu hop neu ban muon dung database trong hosting hien tai.

File MySQL da tao:

- `db/namecheap_mysql_schema.sql`

Cach tao database tren Namecheap:

1. Vao Namecheap `Hosting List`.
2. Bam `Manage` goi hosting.
3. Vao `cPanel`.
4. Tim `MySQL Databases`.
5. Tao database, vi du `studyflow`.
6. Tao database user, dat password manh.
7. Gan user vao database voi `All Privileges`.
8. Vao `phpMyAdmin`.
9. Chon database vua tao.
10. Bam `Import`.
11. Upload `db/namecheap_mysql_schema.sql`.
12. Bam `Go`.

Sau do database da co bang, nhung web van chua dung database cho den khi co backend API.

## Can them backend API de lam production

Neu dung Namecheap shared hosting, cach don gian nhat la PHP API:

- `api/login.php`
- `api/me.php`
- `api/courses.php`
- `api/progress.php`
- `api/tasks.php`
- `api/classrooms.php`
- `api/admin.php`

Frontend se goi API bang `fetch('/api/me.php')`, backend PHP moi noi MySQL bang credential an toan tren server.

## Password nen luu the nao

Khong luu password plain text.

Neu dung MySQL/PHP:

- Luu `password_hash`.
- Tao hash bang `password_hash($password, PASSWORD_DEFAULT)`.
- Kiem tra bang `password_verify($password, $hash)`.

Neu dung Supabase:

- Khong tao cot password trong `profiles`.
- De Supabase Auth quan ly password.
- `profiles` chi luu thong tin ca nhan va role.

## Do kho

- Tao database va import SQL: de.
- Chuyen localStorage sang database: vua.
- Auth that + role + upload file + admin moderation: can lam ky.

Neu muc tieu la nop/demo nhanh, cu fix web local roi deploy static truoc.
Neu muc tieu la san pham that, nen chuyen sang Supabase hoac them PHP API truoc khi public chinh thuc.
