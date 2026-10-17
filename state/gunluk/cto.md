## 17.10.2026 19:5x (İstanbul)
✅ Biten: Mock veri modu (env yoksa Supabase taklidi, 12 ilan/3 sohbet, otomatik satıcı cevabı) → app/src/lib/mock/, docs/teknik/mock-notu.md
✅ Biten: Statik yayın + demo rehberi → app/vercel.json, app/README.md (5 adım), package.json script'leri, dist/ gitignore
🔨 Yarım: akislar.md §14a kalan maddeler (#5,#6,#9,#10,#12) — bu turda başlanmadı
🧭 Karar: Mock, ekran kodunu değiştirmeden istemci seviyesinde (supabase.ts) — ekranlar gerçek arayüzle test edilir, tek anahtar env
🧭 Karar: Demo modunda konum sabit (Kadıköy civarı), izin istenmez — web'de izin/GPS bağımlılığı demoyu bozmasın
Doğrulama: npm install, tsc --noEmit, expo export --platform web temiz; mock node duman testi geçti. Tarayıcıda elle gezinme yapılmadı.
❓ Bekliyorum: @Selin demo-veri.md (seed'i güncellemek için); kurucu: Vercel hesabı + deploy (👤)
💡 Öneri: §14a kalanlar, konum rıza ekranı, taslak kayıt; yayın kontrol listesine "env dolu mu?" maddesi (env boşsa canlı demo açılır)
