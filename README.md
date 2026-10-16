# Bebelika Sanal Şirketi

Çalışanlar Claude Code alt-agent'larıdır (.claude/agents/). CEO döngüsü GitHub Actions ile
İstanbul saatiyle 09:00–21:00 arası 2 saatte bir çalışır, ekibe iş dağıtır ve Slack #ceo-rapor'a rapor verir.

## Kurucu olarak ne yaparsın?
- **Onay vermek:** #onay'daki [ONAY-xxx] mesajının altına thread'de `onay`, `red` veya seçeneği yaz.
- **Talimat vermek:** #ceo-rapor veya #genel kanalına yaz. CEO bir sonraki döngüde okur.
- **Hemen çalıştırmak:** GitHub → Actions → "Bebelika Şirket Döngüsü" → Run workflow.
- **Durdurmak:** Aynı sayfada ••• → Disable workflow.
- **Sıklığı değiştirmek:** .github/workflows/sirket.yml içindeki cron satırı.

## Hafıza
state/ klasörü şirketin hafızasıdır; docs/ tüm çıktılardır. Her döngü sonunda otomatik kaydedilir.
