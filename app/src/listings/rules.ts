// İlan güvenlik kuralları. Kaynak: docs/urun/kategoriler.md §3-4, docs/hukuk/politika.md §3 (Hukuk teyidi/avukat bekliyor).

/** Yasaklı ürün özeti (ilan öncesi tek satır + "Tümünü gör"). */
export const BANNED_SUMMARY = 'Mama, ek gıda, süt, vitamin, ilaç, tıbbi cihaz, emzik/diş kaşıyıcı, bebek yuvası, kazaya karışmış oto koltuğu, geri çağrılmış ve sahte marka ürünler yasak.';
export const BANNED_LIST = [
  'Mama, ek gıda, süt, vitamin, ilaç, anne sütü',
  'Tıbbi cihaz (ör. nebülizatör, ateş ölçer)',
  'Emzik ve diş kaşıyıcı',
  'Kazaya karışmış oto koltuğu',
  'Bebek yuvası / uyku pozisyoneri',
  'Kırık veya eksik güvenlik ürünü',
  'Sahte marka ve geri çağrılmış ürünler',
  'Biberon (pilotta yasak; Hukuk teyidi bekliyor)',
];

// Başlıkta geçerse yumuşak uyarı (engellemez: yanlış pozitif riski).
const WORDS = ['emzik', 'nebülizatör', 'nebulizatör', 'bebek yuvası', 'mama ', 'vitamin', 'şurup', 'ilaç', 'biberon', 'diş kaşıyıcı'];

export function bannedHint(title: string): string | null {
  const t = title.toLocaleLowerCase('tr') + ' ';
  const hit = WORDS.find((w) => t.includes(w));
  return hit ? `“${hit.trim()}” yasaklı ürünler arasında olabilir. İlan vermeden önce listeyi kontrol et.` : null;
}

/** Riskli kategorilerde zorunlu satıcı beyanları (kategori id → beyan metinleri). Beyan satıcınındır; Bebelika incelemez. */
export const DECLARATIONS: Record<number, string[]> = {
  2: ['Fren, kemer ve katlama kilidi çalışıyor.'],
  3: ['Kemer ve kilit sağlam, çalışıyor.'],
  6: ['Bağlantı parçaları tam; kırık veya boyası dökülmüş yer yok.'],
  8: ['Kazaya karışmadı (kazasız).', 'ECE etiketi okunuyor, üretim tarihi geçerli.'],
};

export const GIYIM_NOTU = 'İpli/kordonlu boyun ve kapüşon parçaları boğulma riski taşır; ilanda belirt.';
