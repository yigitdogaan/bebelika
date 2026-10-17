#!/usr/bin/env node
// Kullanım: node scripts/foto-indir.cjs "<görsel-url>" app/assets/ornek/<ad>.jpg
const https = require("https"), fs = require("fs"), path = require("path");
const [url, hedef] = process.argv.slice(2);
if (!url || !hedef) { console.error('Kullanım: node scripts/foto-indir.cjs "<url>" <hedef.jpg>'); process.exit(1); }
if (!path.resolve(hedef).startsWith(path.resolve("app/assets"))) { console.error("Hedef app/assets/ altında olmalı"); process.exit(1); }
function indir(u, kalan) {
  https.get(u, { headers: { "User-Agent": "Mozilla/5.0 BebelikaDemo" } }, res => {
    if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && kalan > 0) {
      res.resume(); return indir(new URL(res.headers.location, u).toString(), kalan - 1);
    }
    if (res.statusCode !== 200) { console.error("HTTP " + res.statusCode); process.exit(1); }
    const tip = res.headers["content-type"] || "";
    if (!tip.startsWith("image/")) { console.error("Görsel değil: " + tip); res.resume(); process.exit(1); }
    fs.mkdirSync(path.dirname(hedef), { recursive: true });
    const parcalar = [];
    res.on("data", p => parcalar.push(p));
    res.on("end", () => {
      const veri = Buffer.concat(parcalar);
      fs.writeFileSync(hedef, veri);
      const kb = Math.round(veri.length / 1024);
      console.log("✓ " + hedef + " (" + kb + " KB)" + (kb > 300 ? "  ⚠️ 300 KB üstü, daha küçük genişlikle tekrar indir" : ""));
    });
  }).on("error", h => { console.error(h.message); process.exit(1); });
}
indir(url, 5);
