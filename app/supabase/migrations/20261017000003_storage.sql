-- Fotoğraf kovası: ilk sürümde public okuma (yol tahmin edilemez uuid), yazma yalnız kendi klasörüne.
-- Yol düzeni: <user_id>/<listing_id>/<zaman>-<i>.jpg
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('listing-photos', 'listing-photos', true, 1048576, array['image/jpeg'])
on conflict (id) do nothing;

create policy lphotos_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'listing-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy lphotos_delete on storage.objects for delete to authenticated
  using (bucket_id = 'listing-photos' and (storage.foldername(name))[1] = auth.uid()::text);
