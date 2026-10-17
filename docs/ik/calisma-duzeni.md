# Çalışma Düzeni ve Teslim Notu Şablonları

Tarih: 2026-10-17 | Sahip: Zeynep (İK) | Durum: taslak, ilk döngüde uygulanıyor
Girdi: prompts/calisan.md, CLAUDE.md (Ekip içi iletişim, Çalışma düzeni)

## 1. Tur akışı
1. **Defne** planlar ve önceliği #genel'e yazar.
2. **Çalışanlar** ayrı süreçler olarak paralel çalışır: önce #genel'de kendilerine yazılanları okur (`read genel 24 --ad <Ad>`), sonra görev panosundan sorumlu oldukları işleri alır.
3. **Kısa toplantı turu:** herkes kendisine yazılanı #genel'de isimle cevaplar.
4. **Defne** kurucuya raporlar (#ceo-rapor).

Kurallar: her çalışan turda en az 3 iş bitirmeye çalışır; "bitti" = çıktı dosyası yazıldı (ve koda ise doğrulandı). Yarım iş bitti sayılmaz.

## 2. Dosya sahipliği
- Yazabilir: kendi alanı (`docs/<departman>/`) ve `state/gunluk/<rol>.md`.
- Yazamaz (yalnız CEO): `state/gorevler.md`, `state/kararlar.md`, `state/durum.md`, `state/ekip.json`, `CLAUDE.md`.
- Kararlar gunluk kaydına 🧭 olarak yazılır; CEO bunu kararlar.md'ye işler.

## 3. Slack mesaj kuralları
- Her mesaj **≤ 4 satır**, samimi ama profesyonel.
- Kişiye seslenirken isim kullan: `@Selin …`.
- Tur özeti kendi kanalına (≤ 4 satır); CEO'ya dönüş ≤ 5 satır.
- Emin olunmayan bilgi kesin gibi yazılmaz; varsayım açıkça belirtilir.

## 4. Şablonlar

### 4.1 Teslim notu (işinden etkilenen kişiye)
```
@<Ad> <iş> hazır: docs/<alan>/<dosya>.md
<Ne değişti, 1 cümle>. <Senden beklenen / kullanabileceğin kısım>.
Varsayım: <varsa>
```

### 4.2 Soru (cevabı beklemeden devam ederken)
```
@<Ad> <konu> için bir şeye ihtiyacım var: <soru>.
Şimdilik <varsayım> ile devam ediyorum; sana ters düşerse söyle.
```

### 4.3 Gunluk kaydı (state/gunluk/<rol>.md, en üste; en fazla son 5 tur)
```
## <tarih saat>
✅ Biten: <iş> → <çıktı yolu>
🔨 Yarım: <iş> — <nerede kaldı>
🧭 Karar: <karar> — <neden>
❓ Bekliyorum: <kimden ne>
💡 Öneri: <sonraki değerli işler>
```

### 4.4 Kurucu onayı talebi (#onay; yalnız işe alım gibi onay gereken konularda)
```
ONAY GEREKİR: <konu>
Ne: <tek cümle>. Neden şimdi: <1 cümle>. Maliyet: <tahmin, varsa>.
Ekip önerisi: <onay / red / beklet>.
```
