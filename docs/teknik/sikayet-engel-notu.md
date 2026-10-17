# Şikâyet + Engelleme: Uygulama Notu (CTO Ece, 2026-10-17)

Girdi: docs/hukuk/moderasyon.md §2-§7, docs/teknik/mimari.md. Kod: app/.

## Yapılanlar
- Migration `app/supabase/migrations/20261017000004_moderation.sql`: v1'deki `reports` genişletildi (category C1-C7, status, priority, also_blocked, auto_hidden, assigned_to, first_response_at); `moderation_actions`, `appeals`, `audit_log` eklendi; `listings.moderation_status` (visible/hidden_auto/removed).
- Mevcut `blocks` tablosu + `is_blocked_between` (iki yönlü, ilan/konuşma/mesaj RLS'inde zaten kullanılıyor) korundu.
- RLS: yeni üç tabloda açık. reports: kullanıcı yalnız ekler (sütun bazlı GRANT) ve kendi kaydını okur; öncelik/durum trigger ile sunucuda atanır. Moderasyon kararını yalnız hedef kullanıcı okur; şikâyetçi kimliği bu tabloda yok. appeals: yalnız kendi kararına, karar sütunları yazılamaz. audit_log: politika yok (yalnız service_role).
- Aynı kullanıcı aynı nesneye tek şikâyet (kısmi unique index); kendini şikâyet engeli.
- Otomatik gizleme: aynı ilana >=3 farklı şikâyetçi veya C1/C2 -> `hidden_auto` (geçici, insan inceler; tam otomatik ban yok).
- Sahibi `moderation_status` değiştiremesin diye `listings` UPDATE yetkisi sütun bazlıya daraltıldı; `listings_read` ve `nearby_listings` yalnız `visible` gösterir.
- appeals: karar veren = inceleyen olamaz (trigger).
- İstemci: `app/src/safety/api.ts` (submitReport, blockUser/unblockUser/myBlocks, submitAppeal), `ReportScreen.tsx` (kategori seç, not, "engelle" anahtarı).

## Doğrulanamayanlar (dürüst durum)
- `npm install` bu ortamda çalıştırılamadı (komut izin sisteminde onaylanmadı); node_modules yok, dolayısıyla `npx tsc --noEmit` ÇALIŞTIRILAMADI. Tip denetimi sonucu yok; kod elle gözden geçirildi, derlendiği iddia edilmez.
- Migration yerel Postgres/Supabase'de ÇALIŞTIRILMADI (psql/supabase CLI yok). Sözdizimi yalnız gözle kontrol edildi; ilk `supabase db reset` çalıştırmasında hata çıkabilir.
- RLS testleri (pgTAP/ikinci kullanıcı senaryosu) yazılmadı.
- Hukuk "TEYİT" maddeleri (N=3, saklama süreleri, hash) varsayımdır, avukat teyidi bekler.

## Bilinen eksikler / sonraki adım
- ReportScreen henüz App.tsx/DiscoverScreen'e bağlı değil (ilan detay ekranı yok); detay ve sohbet ekranı gelince "Bildir/Engelle" menüsü eklenecek.
- Engellenenlerin keşfette ve profillerde süzülmesi `listings_read` ile ilan düzeyinde var; kullanıcı listesi ekranı yok.
- users ek alanları (status/suspended_until/ban), recall_list, saklama işi, admin ekranı sonraki döngü.
- Önerilen sıra: `cd app && npm install && npx tsc --noEmit`, sonra `supabase db reset`.
