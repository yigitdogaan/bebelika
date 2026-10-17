# Kontrast Ölçümü — Marka Paleti (v1)
Hazırlayan: Selin · 17.10.2026 · Yöntem: WCAG 2.x göreli parlaklık formülü, Node ile hesaplandı (tahmin değil, ölçüm).
Eşikler: normal metin ≥4,5:1 (AA); arayüz bileşeni/ikon/çerçeve ≥3:1.

| Çift | Ön | Arka | Oran | Eşik | Sonuç |
|---|---|---|---|---|---|
| Beyaz yazı / Nane Koyu (ana buton) | #FFFFFF | #2F7D6D | 4,91:1 | metin 4,5 | ✅ |
| Beyaz yazı / Çam (basılı buton) | #FFFFFF | #256B5D | 6,29:1 | metin 4,5 | ✅ |
| Nane Koyu bağlantı / Krem | #2F7D6D | #FFFBF5 | 4,76:1 | metin 4,5 | ✅ (sınıra yakın; küçük metinde Çam tercih) |
| Çam bağlantı / Krem | #256B5D | #FFFBF5 | 6,10:1 | metin 4,5 | ✅ |
| Mürekkep / Krem | #1F2A2E | #FFFBF5 | 14,26:1 | metin 4,5 | ✅ |
| Mürekkep / Beyaz | #1F2A2E | #FFFFFF | 14,70:1 | metin 4,5 | ✅ |
| Gri-kömür / Krem | #5B6770 | #FFFBF5 | 5,63:1 | metin 4,5 | ✅ |
| Gri-kömür / Beyaz | #5B6770 | #FFFFFF | 5,80:1 | metin 4,5 | ✅ |
| Mürekkep / Nane Açık (seçili çip) | #1F2A2E | #DCEFE9 | 12,29:1 | metin 4,5 | ✅ |
| Çam / Nane Açık | #256B5D | #DCEFE9 | 5,26:1 | metin 4,5 | ✅ |
| Mürekkep / Şeftali (rozet) | #1F2A2E | #F4A261 | 7,13:1 | metin 4,5 | ✅ |
| **Beyaz / Şeftali** | #FFFFFF | #F4A261 | **2,06:1** | metin 4,5 | ❌ |
| Uyarı metni / Kehribar bant | #7A4B00 | #FFE9C7 | 6,26:1 | metin 4,5 | ✅ |
| Hata kırmızı / Beyaz | #B3261E | #FFFFFF | 6,54:1 | metin 4,5 | ✅ |
| Hata kırmızı / Krem | #B3261E | #FFFBF5 | 6,34:1 | metin 4,5 | ✅ |
| **Gri-kömür / Pasif zemin** | #5B6770 | #E6E1D8 | **4,46:1** | metin 4,5 | ❌ (kıl payı) |
| **Çerçeve / Krem** | #E6E1D8 | #FFFBF5 | **1,26:1** | bileşen 3 | ❌ |
| **Şeftali / Krem (ikon)** | #F4A261 | #FFFBF5 | **2,00:1** | bileşen 3 | ❌ |
| Nane Koyu / Krem (ikon) | #2F7D6D | #FFFBF5 | 4,76:1 | bileşen 3 | ✅ |

## Sonuçlar ve düzeltmeler
Marka.md'deki "doğrulanmadı" notu kalktı: **Nane Koyu #2F7D6D beyaz yazıyla geçiyor (4,91)**, Çam'a koyulaştırmaya gerek yok.

1. **Şeftali üstüne beyaz yazı YASAK** (2,06). Şeftali rozet/şerit üstünde yalnız Mürekkep #1F2A2E (7,13) kullanılır.
2. **Şeftali tek başına bilgi taşıyan ikon/çizgi olamaz** (2,00). Süs/vurgu için serbest; anlam taşıyorsa (ör. favori kalbi) Mürekkep veya Nane Koyu kullan. Alternatif koyu şeftali: **#9A5B13** (kremde 5,25) — metin/ikon gerekirse.
3. **Giriş alanı çerçevesi** #E6E1D8 yetersiz (1,26). Giriş alanı ve etkileşimli kutularda **#85837B** (Krem'de 3,68, beyazda 3,80). #E6E1D8 yalnız kart ayracı/süs çerçevesinde kalır (anlam taşımıyor, WCAG muaf).
4. **Pasif buton yazısı**: #5B6770 → **#4F5A63** (pasif zeminde 5,42). Pasif öğeler WCAG'de muaf ama okunurluk için düzeltildi.
5. Küçük (<18px) bağlantı metni için Nane Koyu yerine Çam #256B5D tercih edilir (6,10 vs 4,76).

## Uygulama notu
Kod henüz bu paleti kullanmıyor (marka.md §7 geçiş tablosu). Ece/Selin tema dosyasını kurarken yukarıdaki 3. ve 4. maddeleri token olarak ekleyecek: `girisCerceve: #85837B`, `pasifMetin: #4F5A63`.
