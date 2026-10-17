# Bebelika: Dış Avukat İnceleme Paketi (Yayın Öncesi)

Hazırlayan: Av. Murat (Hukuk ve Uyum) | Tarih: 2026-10-17 | Durum: TASLAK | Dayanak: ONAY-004 ✔
> UYARI: Bu belge hukuki görüş taslağıdır, hukuki tavsiye değildir. "(TEYİT)" = avukat veya birincil resmi kaynak teyidi gerekir.
> ONAY GEREKİR (taahhüt): Avukat seçimi, vekâlet/danışmanlık sözleşmesi ve ücret kurucunun kimliği/kartıyla yapılır.
> Ekip bunları yapamaz; CEO raporunda "👤 Senin yapman gereken" olarak bildirilir.

## 1. Amaç ve kapsam
Pilot (İstanbul, elden teslim, ücretsiz ilan; öne çıkarma ücreti MVP dışı) yayına çıkmadan önce bağımsız bir avukatın
hangi belgeleri inceleyeceğini, hangi soruları yanıtlayacağını ve hangi sırayla çalışacağını tanımlar.
Önerilen avukat profili: bilişim/e-ticaret + KVKK deneyimli; tercihen tüketici ve ürün güvenliği tecrübesi olan bir büro.

## 2. İncelenecek belgeler
| # | Belge | Yol | Durum | Öncelik |
|---|---|---|---|---|
| 1 | Ürün güvenliği politikası + KVKK ön analizi | docs/hukuk/politika.md | Taslak | Yüksek |
| 2 | Şikâyet ve moderasyon süreci (askıya alma, itiraz dahil) | docs/hukuk/moderasyon.md | Taslak | Yüksek |
| 3 | Kullanıcı Sözleşmesi, Aydınlatma Metni, Açık Rıza (konum), Gizlilik Politikası | docs/hukuk/sozlesme-taslak.md | Taslak | Yüksek |
| 4 | Riskli ürün uyarı metinleri ve yasaklı liste | docs/hukuk/riskli-urunler.md | Taslak | Yüksek |
| 5 | Öne çıkarma ücreti tüketici hukuku notu (ileriye dönük) | docs/hukuk/one-cikarma.md | Taslak | Düşük (MVP dışı) |
| 6 | MVP kapsamı ve ekran akışları (bağlam) | docs/urun/mvp.md, docs/tasarim/akislar.md | Bağlam | Bilgi |
| 7 | Veri modeli ve mimari (hangi veri nerede, hangi servis) | docs/teknik/mimari.md, app/ migration'ları | Bağlam | Orta |

Not: Topluluk Kuralları yayın metni, kullanıcıya gösterilen S19/S20 bildirim metinleri ve mağaza veri formları
(App Store gizlilik etiketi, Google Play Veri Güvenliği) henüz yazılmadı; avukat paketine ikinci dalga olarak eklenecek.

## 3. Avukata sorulacak sorular (öncelik sırasıyla)

### A. Statü ve kayıt (6563)
1. Bebelika 6563 sayılı Kanun kapsamında "aracı hizmet sağlayıcı" mıdır? Bireyler arası, ücretsiz ve ödemesiz ilan
   platformu için ETBİS kaydı, lisans ve ETAHS Yönetmeliği eşikleri geçerli midir? (TEYİT)
2. Bireysel kullanıcı "hizmet sağlayıcı/satıcı" sayılır mı? Düzenli (ticari) satıcıyı ayırmak için ölçüt ne olmalı
   (ilan sayısı eşiği, vergi/ticari kayıt beyanı)? Ticari satıcıya ek bilgilendirme yükümlülüğü doğar mı? (TEYİT)
3. m.9/2'deki "haberdar olma" hangi anda doğar (şikâyet, otomatik filtre, ekip gözlemi)? "Gecikmeksizin" kaldırma için
   iç hedefimiz 24 saat; savunulabilir mi? Kamu kurumuna bildirim kime ve nasıl yapılır?
4. Fikri mülkiyet şikâyeti (m.9/3) için hak sahibi başvuru formu ve süre süreci nasıl kurulmalı (sahte marka ilanları)?

### B. Ürün güvenliği (7223 ve Genel Ürün Güvenliği Yönetmeliği)
5. İkinci el ürünün satışı "piyasaya arz" sayılır mı? Platformun ürün güvenliği kapsamındaki rolü nedir?
6. Çocuk oto koltuğu, beşik, park yatak için bağlayıcı teknik düzenleme var mı (ECE R44/R129, EN 716/1130 atfı)?
   Yasaklarımızdan hangileri yasal zorunluluk, hangileri platform politikası olarak gösterilmeli?
7. GÜBİS/Bakanlık geri çağırma listesiyle eşleştirme yükümlülüğü var mı, yoksa gönüllü iyi uygulama mı?
8. Beyan ("kazasız", "çalışır durumda") yanlışlığında platformun sorumluluğu; "satıcı beyanıdır" ibaresi yeterli mi?

### C. Sözleşme ve tüketici hukuku
9. Kullanıcı Sözleşmesi'nde sorumluluk sınırlama, tek taraflı değişiklik, hesap askıya alma ve fesih maddeleri
   (TKHK ve TBK genel işlem şartları, haksız şart riski) geçerli ve uygulanabilir mi?
10. Elden teslimde alıcı-satıcı arasındaki satışta Bebelika'nın "buluşma güvenliği" önerileri sorumluluk doğurur mu?
    İfade ("öneri, garanti değil") yeterli mi?
11. 18 yaş sınırı ve yaş beyanı doğrulama düzeyi yeterli mi?
12. Gelecekte öne çıkarma ücreti: bkz. one-cikarma.md; MVP'de ücret alınmadan hazırlık gerekir mi?

### D. KVKK
13. VERBİS kayıt yükümlülüğü ve istisna eşikleri (çalışan sayısı, mali bilanço) pilot için geçerli mi? (TEYİT)
14. Aydınlatma metni ile açık rıza metninin ayrılması (Kurul 2026/347 ilke kararı, ikincil kaynak) doğru okunmuş mu?
15. Konum: ilçe düzeyi ilan konumu için "sözleşmenin ifası", cihaz GPS'i için "açık rıza" ayrımı doğru mu?
16. Mesaj içeriklerinin şikâyet halinde incelenmesi: hukuki sebep (meşru menfaat) ve aydınlatma düzeyi yeterli mi?
    Fotoğraflarda çocuk görüntüsünün kaldırılması için dayanak?
17. Yurt dışı aktarım: Supabase, push ve analitik servisleri yurt dışında barındırılıyorsa 7499 sonrası rejimde hangi mekanizma
    (standart sözleşme + Kurul'a bildirim vb.) gerekir? Veri işleyen sözleşmeleri nasıl kurulmalı?
18. Saklama süreleri: log/IP (5651), mesaj (öneri 1 yıl), kesin konum (öneri 30 gün), askıdaki hesap kayıtları.
19. Veri ihlali bildirimi (72 saat) ve ilgili kişi başvurusu (30 gün) için asgari süreç.
20. Ticari elektronik ileti: bildirim/pazarlama için İYS kaydı ve ayrı onay gerekli mi?

### E. Mağaza ve moderasyon
21. App Store ve Google Play'in kullanıcı üretimli içerik (UGC) şartları (şikâyet, engelleme, hızlı müdahale, hesap silme)
    mevcut tasarımla karşılanıyor mu? (Güncel mağaza metinleri ekip tarafından doğrulanmadı, TEYİT.)
22. İtiraz süreci (14 gün itiraz, 7 gün yanıt hedefi, ikinci itiraz yok) ve nötr bildirim dili hukuken savunulabilir mi?
23. Resmî makam talepleri (savcılık, Bakanlık) için yanıt prosedürü ve kayıt tutma.

## 4. Çalışma planı önerisi
1. Hazırlık (kurucu): avukat seçimi, kapsam ve ücret teklifi, gizlilik taahhüdü. (👤, ONAY GEREKİR: taahhüt)
2. Hafta 1: Belge 1–4 teslimi, sorular A–D yazılı görüş talebi. İlk görüşme (60 dk).
3. Hafta 2: Avukat redline'ı; Murat revizyonu; kritik "yasak mı politika mı" listesinin kesinleşmesi.
4. Hafta 3: Nihai metinler (sözleşme, aydınlatma, gizlilik, topluluk kuralları) kurucu onayına; mağaza formları.
5. Yayın kapısı: avukat yazılı "yayına engel yok" teyidi + VERBİS/ETBİS kararı. Teyit yoksa yayın yok.
Süre/ücret tahminleri doğrulanmamıştır; avukattan teklif alınmalıdır.

## 5. Avukata verilecek ek bilgiler
- Ürün bir marketplace değil: satış, ödeme, kargo yok; yalnızca ilan + uygulama içi mesajlaşma + konum.
- Pilot: İstanbul, 8 hafta, 250 ilan hedefi (tahmin, docs/urun/pilot-esikler.md).
- Şirket tüzel kişiliği henüz kurulu olmayabilir (TEYİT, kurucuya sorulur): veri sorumlusu kim olacak, sözleşme tarafı kim?
  Bu, avukatın ilk soracağı soru olur; kurucunun hazırlıklı gelmesi önerilir.
- Ürün henüz mock veri ile demo aşamasında; gerçek kullanıcı verisi işlenmiyor.

## 6. Kurucu için kontrol listesi (👤)
- [ ] Avukat/büro seçimi ve görüşme talebi (2–3 teklif önerilir).
- [ ] Tüzel kişilik/vergi mükellefiyeti durumunu avukata bildirmek.
- [ ] Avukat sözleşmesi ve ücret onayı.
- [ ] Paketteki belgeleri avukata iletme onayı (belgeler iç taslaktır; gizlilik taahhüdü sonrası).
