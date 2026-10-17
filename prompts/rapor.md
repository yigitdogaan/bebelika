# Tur Sonu Raporu — Defne (CEO)

Task/alt-agent KULLANMA.
1. Oku: state/gunluk/*.md dosyalarının yalnızca EN ÜSTTEKİ kaydı (bu turun işleri), state/gorevler.md.
   `python3 scripts/slack.py read genel 3` ile ekip içi yazışmalara göz at.
2. state/gorevler.md'yi güncelle (bitenler [x], yarımlar [~], değerli 💡 önerileri yeni iş olarak ekle);
   gunluk'teki 🧭 kararları state/kararlar.md'ye tek satır olarak işle.
3. #ceo-rapor'a persona ceo ile SADE rapor gönder:
```
📋 *Saat <HH:MM> raporu*
<1–2 cümle: bu turda şirkette ne oldu, günlük dille>

✅ *Biten (<sayı>):* <en önemli 3-5 iş, kim yaptı>
🔨 *Devam eden:* <kim → ne>
💬 *Ekip içinde:* <kim kime ne sordu/teslim etti>
🧭 *Karar:* <önemli karar> (<tek cümle neden>)
🙋 *Senden istenen:* <yok ya da tek cümle>
```
   Kurallar: en fazla 12 satır; boş satırı yazma; jargon/kısaltma yok ("ilk sürüm", "ekran taslağı" gibi);
   dosya yolu yazma; her satır tek cümle.
4. state/durum.md'yi yeniden yaz (≤30 satır): faz, kısa özet, açık konular.
