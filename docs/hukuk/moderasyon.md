# Bebelika: Şikâyet ve Moderasyon Süreci (F8) Pilot Taslağı

Hazırlayan: Av. Murat (Hukuk ve Uyum) | Tarih: 2026-10-17 | Durum: TASLAK
> UYARI: Hukuki görüş taslağıdır, hukuki tavsiye değildir. Yayına çıkmadan önce gerçek bir avukatın incelemesi önerilir.
> "(TEYİT)" = avukat/birincil kaynak teyidi gerekir. Bu belge için yeni web araması yapılmadı; dayanak politika.md §1 kaynaklarıdır.

## 1. Varsayımlar
- V1: Pilot İstanbul, düşük hacim (haftada onlarca şikâyet). Kuyruğu başlangıçta Kerem + Murat (veya atanacak moderatör) yönetir.
- V2: Bebelika aracı hizmet sağlayıcıdır; bildirimden haberdar olunca makul sürede müdahale (bildir-kaldır) riski azaltır (6563 m.9, 5651 atfı, TEYİT).
- V3: Süreler İÇ HEDEFTİR; kullanıcıya süre taahhüdü yazılmaz (akislar.md §10 ile uyumlu). Yasal süre dayanağı TEYİT.
- V4: Hafta sonu/gece kapsama sınırlıdır; kritik vakalar için tek nöbetçi kişi gerekir (kurucu/İK kararı).
- V5: Üyelik 18+; çocuğa ait veri toplanmaz.

## 2. Şikâyet türleri ve öncelik
| Kod | Tür (S17 kategorisi) | Öncelik | İlk müdahale hedefi |
|---|---|---|---|
| C1 | Çocuğa ait görüntü / istismar şüphesi | P0 kritik | Hemen gizle, en geç 4 saat inceleme |
| C2 | Geri çağrılan / kazalı / yasaklı güvensiz ürün | P0 | 24 saat (politika.md §3.3) |
| C3 | Taciz, tehdit, buluşmada güvenlik olayı | P0 | 24 saat; fiziksel tehlike varsa kullanıcıya 112 yönlendirmesi |
| C4 | Dolandırıcılık (IBAN, ön ödeme, dışarı çıkma baskısı) | P1 | 24 saat |
| C5 | Sahte/taklit ürün, marka hakkı ihlali | P1 | 72 saat |
| C6 | Sahte ilan, spam, yanlış kategori/beyan | P2 | 72 saat |
| C7 | Diğer | P2 | 5 iş günü |
- Aynı nesneye N şikâyet (öneri N=3, pilotta ayarlanır) gelirse ilan otomatik gizlenir, insan incelemesi bekler (otp-karar.md ile uyumlu). Kötüye kullanım: şikâyet bombardımanıyla rakip ilan düşürmeyi önlemek için tek kullanıcı aynı nesneye tek şikâyet; gizleme geçicidir.
- C1 ve C2'de şüphede önce gizle, sonra incele (ihtiyati). C6/C7'de önce incele.

## 3. İş akışı
1. Alındı: kayıt oluşur, tür/öncelik atanır, kullanıcıya "Bildirimin alındı" (süre sözü yok).
2. İnceleme: ilan, fotoğraflar, profil, ilgili geçmiş şikâyetler. Mesaj içeriği yalnızca ilgili şikâyetle sınırlı ve gerekli ölçüde okunur; aydınlatma metninde yazılı olmalı (politika.md §6.3).
3. Karar ve uygulama (§4), kayıt kapatma, taraflara bildirim (§5).
4. C1 ve C3'te yetkili makama bildirim/talep yanıtı yalnızca Hukuk üzerinden yürür. ONAY GEREKİR (taahhüt): resmi başvuru/bildirim kurucu onayına tabidir (acil can güvenliği hariç, 112 yönlendirmesi kullanıcıya yapılır; kurum adına karar avukata danışılır).

## 4. Aksiyonlar (kademeli)
| Seviye | Aksiyon | Ne zaman |
|---|---|---|
| A0 | Aksiyon yok, şikâyet kapatılır | Dayanak yok |
| A1 | Uyarı (ilan düzeltme talebi) | İlk, hafif ihlal (C6, eksik beyan) |
| A2 | İlan kaldırma/gizleme | Politika ihlali (C2, C4, C5, C6) |
| A3 | Geçici askı (7-30 gün) | Tekrar ihlal, C3 hafif |
| A4 | Kalıcı ban (hesap + cihaz/telefon engeli) | C1, C3 ağır, çoklu dolandırıcılık, ban kaçırma |
- Tekrar ihlal: 90 gün içinde 2. ihlalde A3, 3. ihlalde A4 (öneri). C1 ve ağır C3/C4'te doğrudan A4 mümkün.
- İlan sahibi kaldırılan ilanını yeniden yükleyemez (aynı marka/model/seri eşleşmesi).
- Ban, "mağdurun şikâyeti" yetmeden keyfi verilmez; gerekçe koduyla kayıt zorunlu. Tam otomatik kalıcı ban yapılmaz (otomatik karar riski, KVKK m.11/g, TEYİT).

## 5. Bildirim ve itiraz
- Karar bildirimi (A1-A4): hangi ilan/hesap, ihlal türü (politika maddesi), uygulanan aksiyon, itiraz yolu. Şikâyetçinin kimliği karşı tarafa açıklanmaz.
- Şikâyet eden: "sonuçlandı" bildirimi; ayrıntı verilmez (üçüncü kişi verisi).
- İtiraz: karardan sonra 14 gün içinde uygulama içi form veya destek e-postası (adres CEO/Ürün belirler). Kararı veren kişiden farklı biri inceler (pilotta Murat veya kurucu); hedef 7 gün, sonuç gerekçeli. İtiraz süresi/hedefi iç tercihtir (TEYİT).
- İtiraz kabulünde ilan/hesap geri açılır, ihlal kaydı "iptal" işaretlenir (silinmez).
- C1 ve ağır C3'te itirazda geri açma yalnızca Hukuk onayıyla.
- Mağaza uyumu (Apple UGC/Google Play UGC): şikâyet, engelleme, moderasyon, hesap silme MVP'de bulunmalı; hesap silinse bile yasal/uyuşmazlık kaydı §6'daki sürelerle kalır (TEYİT).

## 6. Kayıt tutma ve KVKK
- Tutulacak: şikâyet, karar, gerekçe kodu, işlemi yapan kişi, zaman damgası, kaldırılan ilanın anlık görüntüsü (foto dahil, erişimi kısıtlı).
- Saklama (öneri, TEYİT): şikâyet ve karar kaydı 2 yıl; kaldırılan ilan görüntüsü ve ilgili mesaj alıntısı 1 yıl; C1 kanıtı yetkili makam talebi için Hukuk kararıyla daha uzun. Süreler saklama-imha politikasına yazılır.
- Hukuki sebep: meşru menfaat (güvenlik, dolandırıcılık), hukuki yükümlülük, hakkın tesisi (KVKK m.5/2-e,f; TEYİT). Aydınlatma metninde moderasyon amacı yazılır.
- Erişim: yalnızca yönetici rolü; her görüntüleme/işlem denetim loguna yazılır. C1 görüntüsü bulanık önizleme ile açılır (öneri).
- Şikâyet eden ve şikâyet edilen kullanıcı veri sahibi başvurusu (m.11/13): üçüncü kişi bilgisi maskelenerek yanıtlanır.
- Metrikler (haftalık): şikâyet/ilan oranı (pilot eşiği ≤%3, pilot-esikler.md), tür dağılımı, SLA karşılama, itiraz oranı.

## 7. CTO için veri alanları
**reports:** id, reporter_id, target_type (listing/user/message), target_id, category (C1-C7), note (opsiyonel, kısa), also_blocked (bool), status (open/in_review/actioned/dismissed/appealed), priority, created_at, assigned_to, first_response_at, resolved_at, auto_hidden (bool). Kısıt: unique(reporter_id, target_type, target_id).
**moderation_actions:** id, report_id (nullable, proaktif için), target_type/target_id, action (A0-A4), policy_code (politika maddesi), reason_note, actor_id, created_at, expires_at (askı bitişi), reverted_at, reverted_by.
**appeals:** id, action_id, user_id, text, status, reviewer_id (actor ≠ reviewer kısıtı), decision, created_at, decided_at.
**blocks:** blocker_id, blocked_id, created_at.
**users ek alanları:** status (active/suspended/banned), suspended_until, violation_count, banned_at, ban_reason_code, phone_hash (ban kaçırmaya karşı; ham telefon yerine hash, TEYİT), device_id_hash.
**listings ek alanları:** moderation_status (visible/hidden_auto/removed), removed_reason_code, removed_at, snapshot_ref (kaldırılan içerik arşivi, kısıtlı erişim).
**Diğer:** audit_log (kim, neyi, ne zaman görüntüledi/değiştirdi); recall_list (marka, model, seri aralığı, kaynak URL, eklenme tarihi) ve listings eşleşme sonucu; bildirim şablonları (karar, itiraz sonucu); admin rolü (RLS ile ayrı, mesaj tablosuna yalnızca şikâyet bağlı erişim); saklama işi (retention job) ile silme/anonimleştirme.
**Yönetim aracı (pilot asgari):** kuyruk listesi (öncelik/SLA sıralı), nesne detayı, aksiyon butonları (A1-A4), itiraz kuyruğu. Ayrı panel yerine Supabase panel + basit admin ekranı yeterli olabilir (CTO kararı).

## 8. Açık konular ve onaylar
- ONAY GEREKİR (taahhüt): Kullanıcı Sözleşmesi/Topluluk Kuralları'na bu sürecin yazılması, yetkili makamlara resmi bildirim/başvurular, ücretli moderasyon servisi.
- Avukata sorulacaklar: bildir-kaldır yasal süresi ve 6563 m.9 kapsamı; ihtiyati gizleme ve ban için sözleşme dayanağı; saklama süreleri; telefon/cihaz hash'inin KVKK uygunluğu; çocuk görüntüsü bildirim yükümlülüğü; otomatik gizlemenin otomatik karar sayılıp sayılmadığı.
- Pilot sonu gözden geçirme: eşikler (N, süreler, ihlal basamakları) pilot verisiyle yeniden ayarlanır.
