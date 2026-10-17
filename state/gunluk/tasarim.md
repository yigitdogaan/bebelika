## 2026-10-17 20:45 (İstanbul)
✅ Biten: Kontrast ölçümü (Node ile hesaplandı) → docs/tasarim/kontrast.md (Nane Koyu+beyaz 4,91 geçiyor; 4 sorun + düzeltme: şeftali üstü beyaz yazı yasak, giriş çerçevesi #85837B, pasif metin #4F5A63)
✅ Biten: Konum rızası, hesap silme, profil/ayarlar tasarımı → docs/tasarim/konum-silme-profil.md
✅ Biten: Tasarım sistemi kodda → app/src/ui/{theme,Button,TextField,TabBar}.ts(x); AuthScreen ve alt sekme çubuğu yeniden stillendi (tsc + web export temiz, ekran görüntüsüyle doğrulandı). ÖNCE: varsayılan mavi sistem butonları, 4 eş buton, kontrast bilinmiyor. SONRA: krem zemin, nane birincil buton, demo bandı, ikincil/metin buton hiyerarşisi.
🔨 Yarım: Keşfet/ilan detay/sohbet/gelen kutusu/ilan ver ekranlarının yeni sisteme geçişi ve demo gezinti ekran görüntüleri — giriş ekranı dışındaki ekranlara girmek için demo girişine tıklayan bir ekran.cjs adımı gerekiyor; mkdir/cp komutları onay istedi, docs/tasarim/ekranlar/ klasörü oluşturulamadı.
🧭 Karar: Şeftali yalnız süs/rozet dolgusu; anlam taşıyan ikon/metin Mürekkep veya Nane Koyu — ölçülen kontrast 2:1
🧭 Karar: İkon seti (@expo/vector-icons) henüz package.json'da yok; sekme çubuğu şimdilik metin, Ece `npx expo install @expo/vector-icons` ile ekleyince ikon eklenecek
❓ Bekliyorum: Ece'den vector-icons bağımlılığı; Murat'tan konum/silme ekran metinleri teyidi
💡 Öneri: Keşfet ve ilan kartını yeni sisteme geçir; ekran.cjs'e demo girişi adımı ekle; mağaza ekran planı

## 2026-10-17 19:55 (İstanbul)
✅ Biten: Demo örnek veri seti → docs/tasarim/demo-veri.md
✅ Biten: Boş/hata/yükleniyor ekranları → docs/tasarim/bos-durumlar.md
✅ Biten: Marka rehberi v1 → docs/tasarim/marka.md
✅ Biten: Güvenli buluşma ipuçları içeriği → docs/tasarim/bulusma-ipuclari.md
🧭 Karar: Demoda yasaklı ürün yok; mock'ta sahte işlev (çalışmayan Kabul butonu, simüle yanıt) yok; kapatılamaz "Demo verisi" bandı — dürüstlük ve mağaza incelemesi
🧭 Karar: Palet önerisi Nane+Şeftali, "doğrulanmış" rozeti yok — pembe/mavi klişesinden kaçınma, Hukuk dili
❓ Bekliyorum: Murat'tan buluşma ipuçları ifade kontrolü; Ece'den mock'ta yer tutucu foto teyidi
💡 Öneri: Kontrast ölçümü (komut onayı alınamadı, yapılmadı); S13/S14/S15 detay wireframe; kurucu demo ekran akış özeti
