-- Run this once on an existing Namecheap MySQL database before enabling teacher approval.
-- New installs already get this role from db/namecheap_mysql_schema.sql.

alter table profiles
  modify role enum('student', 'teacher_pending', 'teacher', 'admin') not null default 'student';

