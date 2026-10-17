# Sohbet (S12) ve mesajlaşma servisi — not (2026-10-17)

## Kapsam (yapıldı)
- `app/src/chat/api.ts`: getOrCreateConversation (unique listing+alıcı, yarış durumunda yeniden okur), getConversation, listMessages, sendMessage, markRead, subscribeMessages (Supabase Realtime, RLS geçerli), detectSensitive (IBAN/telefon).
- `app/src/chat/ChatScreen.tsx`: ilan özet bandı (S7'ye gider), mesaj akışı, hızlı yanıt çipleri, yazma alanı, "..." menüsü (Engelle, Şikâyet et), mesaja uzun basınca mesaj şikâyeti (ReportTarget=message), güvenlik kartı, satır içi IBAN/telefon uyarısı (engellemez), hata/boş/kapalı ilan durumları, dokunma hedefi ≥48 dp.
- `ListingDetailScreen`: Mesaj butonu bağlandı (kendi ilanı, verildi, girişsiz durumunda pasif). `App.tsx`: sohbet yönlendirmesi.
- Migration `20261017000005_chat.sql`: boş mesaj yasağı; konuşma yalnız yayındaki (aktif/rezerve, moderasyon visible) ilana; hız sınırı (20 sohbet/24 sa, 20 mesaj/dk; pilot varsayımı); mesajlar değiştirilemez (kanıt).

## RLS özeti (000002 + 000005)
Okuma/yazma yalnız konuşma tarafları; engel iki yönlü olduğundan engelli kullanıcıya mesaj eklenemez (msg_insert, 42501); doğrulanmamış hesap yazamaz; yalnız karşı taraf `read_at` günceller.

## Yapılmadı / sınırlar
- [+] Buluşma öner ve Foto gönder yok: kürasyonlu nokta listesi ve mesaj foto deposu yok; sahte işlev konmadı. Sıradaki iş.
- Gelen kutusu (sohbet listesi), push bildirimi yok. Engel sonrası geçmiş mesajlar görünür kalır (kanıt amaçlı); gizleme kararı Hukuk/Ürün ile.
- tsc, SQL ve cihaz testi ÇALIŞTIRILMADI/doğrulanamadı (bağımlılık kurulumu ve Supabase örneği yok). Migration henüz bir veritabanına uygulanmadı.
- Telefon regex'i yanlış pozitif verebilir (uyarı amaçlı, engellemez).
