-- Supabase Storage blueprint for StudyFlow assets.
-- Create bucket in Supabase first:
-- insert into storage.buckets (id, name, public)
-- values ('lesson-assets', 'lesson-assets', false)
-- on conflict (id) do nothing;

create policy "Authenticated users can upload own lesson assets"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'lesson-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Owners can read own lesson assets"
on storage.objects for select
to authenticated
using (
  bucket_id = 'lesson-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Owners can update own lesson assets"
on storage.objects for update
to authenticated
using (
  bucket_id = 'lesson-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'lesson-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);

create policy "Owners can delete own lesson assets"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'lesson-assets'
  and (storage.foldername(name))[1] = auth.uid()::text
);
