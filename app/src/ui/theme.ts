// Bebelika tasarım sistemi — tek kaynak. Değerler docs/tasarim/marka.md ve kontrast.md'den (ölçülmüş).
export const renk = {
  ana: '#2F7D6D',
  anaKoyu: '#256B5D',
  aksan: '#F4A261', // yalnız süs/rozet dolgusu; üstüne beyaz yazı YOK
  zemin: '#FFFBF5',
  yuzey: '#FFFFFF',
  naneAcik: '#DCEFE9',
  metin: '#1F2A2E',
  metinIkincil: '#5B6770',
  cerceveSuslu: '#E6E1D8', // yalnız ayraç/kart çerçevesi
  girisCerceve: '#85837B', // etkileşimli alan çerçevesi (≥3:1)
  pasifZemin: '#E6E1D8',
  pasifMetin: '#4F5A63',
  uyariZemin: '#FFE9C7',
  uyariMetin: '#7A4B00',
  hata: '#B3261E',
  beyaz: '#FFFFFF',
} as const;

export const bosluk = { xs: 4, s: 8, m: 16, l: 24, xl: 32 } as const;
export const yaricap = { s: 8, m: 12, l: 16, tam: 999 } as const;

export const yazi = {
  baslik1: { fontSize: 28, lineHeight: 34, fontWeight: '700' as const, color: renk.metin },
  baslik2: { fontSize: 20, lineHeight: 26, fontWeight: '700' as const, color: renk.metin },
  govde: { fontSize: 16, lineHeight: 23, fontWeight: '400' as const, color: renk.metin },
  yardimci: { fontSize: 14, lineHeight: 20, fontWeight: '400' as const, color: renk.metinIkincil },
  buton: { fontSize: 16, lineHeight: 22, fontWeight: '600' as const },
};
