## 17.10.2026 20:4x (İstanbul)
✅ Biten: Mock seed demo-veri.md'ye eşlendi (12 ilan/5 kullanıcı/3 sohbet, karşı cevap simülasyonu kaldırıldı, demo bandı, IBAN bandı, statik buluşma notu) → app/src/lib/mock/, docs/teknik/mock-notu.md
✅ Biten: Tarayıcı gezinti testi, 24/24 geçti; 7 hata bulundu ve düzeltildi (fotoğraflar boştu, kategori çipleri sıkışık, Alert web'de çalışmıyor, TR büyük harf, fiyat biçimi, yarıçap, IBAN bandı) → scripts/gezinti-testi.cjs, docs/teknik/gezinti-testi.md
✅ Biten: Migration 0007 (4 kategori, listings.source, utm_source/invite_code, rıza sürümü, delete_my_account) + istemci kaynağı yakalama → app/supabase/migrations/…0007…, app/src/auth/source.ts
✅ Biten: Aydınlatma tablosu ↔ şema karşılaştırması → docs/teknik/aydinlatma-sema-karsilastirma.md
✅ Biten: Konum rıza ekranı + ilçe seçimi (§14a #5), hesap silme + profil, ilan ver: bilinçli kategori/durum (#9), yasaklı ürün uyarısı + riskli kategori beyanı (#10) → app/src/listings/, app/src/account/
🔨 Yarım: §14a #6 (filtre sayfası, filtreleri temizle), #12 (S19/S20, engellenenler listesi) — başlanmadı; Murat'ın S19/S20 metinleri bekleniyor
🧭 Karar: 'beslenme' slug'ı korundu, adı "Beslenme gereçleri" (Kerem'in ağacı mama-sandalyesi ile birleştiriyor; demo-veri.md beslenme kullanıyor) — 11 kategori, birleştirme Kerem/Selin kararı
🧭 Karar: Alert.alert yerine src/lib/dialog.ts — RN-web'de Alert çalışmıyor
🧭 Karar: Keşfet varsayılan yarıçap 10 km — pilot ilçeleri + komşular ~6 km
🧭 Karar: Beyan ilan açıklamasına "Satıcı beyanı: …" olarak yazılıyor (ayrı sütun/jsonb sonra) — pilotta şema değişikliği gerektirmesin
Doğrulama: npm install, tsc --noEmit, expo export web temiz; gezinti testi 24/24. Migration 0007 SQL'i Postgres olmadığı için ÇALIŞTIRILMADI (0001-0007 hâlâ denenmedi).
❓ Bekliyorum: @Murat reports.reporter_id SET NULL + silme işi + tablo ekleri; @Selin ekranların stili (hâlâ iskelet Button); kurucu Supabase hesabı (👤) migration denemesi için
💡 Öneri: sıralama formülünü nearby_listings SQL'ine ekle; yetim Storage temizliği; S19/S20 + engellenenler; taslak otomatik kayıt; demo "ilan yayınla" uçtan uca elle test

## 17.10.2026 19:5x (İstanbul)
✅ Biten: Mock veri modu (env yoksa Supabase taklidi, 12 ilan/3 sohbet, otomatik satıcı cevabı) → app/src/lib/mock/, docs/teknik/mock-notu.md
✅ Biten: Statik yayın + demo rehberi → app/vercel.json, app/README.md (5 adım), package.json script'leri, dist/ gitignore
🔨 Yarım: akislar.md §14a kalan maddeler (#5,#6,#9,#10,#12) — bu turda başlanmadı
🧭 Karar: Mock, ekran kodunu değiştirmeden istemci seviyesinde (supabase.ts) — ekranlar gerçek arayüzle test edilir, tek anahtar env
🧭 Karar: Demo modunda konum sabit (Kadıköy civarı), izin istenmez — web'de izin/GPS bağımlılığı demoyu bozmasın
Doğrulama: npm install, tsc --noEmit, expo export --platform web temiz; mock node duman testi geçti. Tarayıcıda elle gezinme yapılmadı.
❓ Bekliyorum: @Selin demo-veri.md (seed'i güncellemek için); kurucu: Vercel hesabı + deploy (👤)
💡 Öneri: §14a kalanlar, konum rıza ekranı, taslak kayıt; yayın kontrol listesine "env dolu mu?" maddesi (env boşsa canlı demo açılır)
