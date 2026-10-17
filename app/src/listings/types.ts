export type Condition = 'yeni_gibi' | 'iyi' | 'orta';
export const CONDITIONS: { value: Condition; label: string }[] = [
  { value: 'yeni_gibi', label: 'Yeni gibi' },
  { value: 'iyi', label: 'İyi' },
  { value: 'orta', label: 'Orta' },
];
// 0001 (identity 1..7) + 0007 (8..11) sırasıyla aynı. Sonra categories tablosundan çekilecek.
export const CATEGORIES: { id: number; name: string }[] = [
  { id: 1, name: 'Giyim' }, { id: 2, name: 'Bebek arabası ve taşıma' }, { id: 3, name: 'Mama sandalyesi' },
  { id: 4, name: 'Oyuncak' }, { id: 5, name: 'Beslenme gereçleri' }, { id: 6, name: 'Uyku' }, { id: 7, name: 'Diğer' },
  { id: 8, name: 'Oto koltuğu' }, { id: 9, name: 'Banyo ve bakım' }, { id: 10, name: 'Anne ürünleri' },
  { id: 11, name: 'Kitap ve gelişim' },
];

export interface NearbyListing {
  id: string; title: string | null; price_try: number; condition: Condition;
  category_id: number; distance_m: number; created_at: string;
  photo_url?: string | null;
}
export type ListingStatus = 'aktif' | 'rezerve' | 'verildi' | 'gizli';
export interface ListingDetail {
  id: string; title: string | null; description: string | null; price_try: number;
  condition: Condition; category_id: number; age_min_months: number | null; age_max_months: number | null;
  status: ListingStatus; created_at: string; seller_id: string;
  seller_name: string | null; photos: string[];
}
export interface ListingInput {
  categoryId: number; priceTry: number; condition: Condition;
  title?: string; description?: string; ageMinMonths?: number; ageMaxMonths?: number;
  lat: number; lng: number;
  photoUris: string[]; // yerel URI, en az 1 (MVP F2)
}
