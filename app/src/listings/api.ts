import * as ImageManipulator from 'expo-image-manipulator';
import { supabase } from '../lib/supabase';
import type { ListingDetail, ListingInput, NearbyListing } from './types';

const BUCKET = 'listing-photos';
const MAX_PHOTOS = 6;

export function photoPublicUrl(path: string): string {
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}

// Yeniden kodlama: boyut küçülür, EXIF (GPS dahil) silinir.
async function prepare(uri: string): Promise<ArrayBuffer> {
  const out = await ImageManipulator.manipulateAsync(uri, [{ resize: { width: 1280 } }],
    { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG });
  return (await fetch(out.uri)).arrayBuffer();
}

async function uploadPhotos(userId: string, listingId: string, uris: string[]) {
  const rows: { listing_id: string; storage_path: string; position: number }[] = [];
  for (let i = 0; i < uris.length; i++) {
    const path = `${userId}/${listingId}/${Date.now()}-${i}.jpg`;
    const { error } = await supabase.storage.from(BUCKET)
      .upload(path, await prepare(uris[i]), { contentType: 'image/jpeg' });
    if (error) throw error;
    rows.push({ listing_id: listingId, storage_path: path, position: i });
  }
  const { error } = await supabase.from('listing_photos').insert(rows);
  if (error) throw error;
}

export async function createListing(input: ListingInput): Promise<string> {
  if (input.photoUris.length < 1) throw new Error('En az 1 fotoğraf gerekli');
  if (input.photoUris.length > MAX_PHOTOS) throw new Error(`En fazla ${MAX_PHOTOS} fotoğraf`);
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  const { data, error } = await supabase.from('listings').insert({
    seller_id: u.user.id,
    category_id: input.categoryId,
    title: input.title || null,
    description: input.description || null,
    price_try: input.priceTry,
    condition: input.condition,
    age_min_months: input.ageMinMonths ?? null,
    age_max_months: input.ageMaxMonths ?? null,
    location: `SRID=4326;POINT(${input.lng} ${input.lat})`, // trigger ~400 m ızgaraya yuvarlar
  }).select('id').single();
  if (error) throw error;
  try {
    await uploadPhotos(u.user.id, data.id, input.photoUris);
  } catch (e) {
    await supabase.from('listings').delete().eq('id', data.id); // yarım ilan bırakma
    throw e;
  }
  return data.id;
}

export async function updateListing(id: string,
  patch: Partial<{ title: string; description: string; price_try: number; condition: string; status: string }>) {
  const { error } = await supabase.from('listings').update(patch).eq('id', id);
  if (error) throw error;
}

export async function deleteListing(id: string) {
  // Storage nesneleri DB cascade ile silinmez; önce yolları topla.
  const { data: ph } = await supabase.from('listing_photos').select('storage_path').eq('listing_id', id);
  const { error } = await supabase.from('listings').delete().eq('id', id);
  if (error) throw error;
  if (ph?.length) await supabase.storage.from(BUCKET).remove(ph.map((p) => p.storage_path));
}

export async function myListings() {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) throw new Error('Giriş gerekli');
  const { data, error } = await supabase.from('listings')
    .select('id,title,price_try,condition,status,category_id,created_at')
    .eq('seller_id', u.user.id)
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

/** İlan detayı. RLS gizli/kaldırılmış/engelli satıcı ilanını döndürmez -> null. */
export async function getListing(id: string): Promise<ListingDetail | null> {
  const { data, error } = await supabase.from('listings')
    .select('id,title,description,price_try,condition,category_id,age_min_months,age_max_months,status,created_at,seller_id')
    .eq('id', id).maybeSingle();
  if (error) throw error;
  if (!data) return null;
  const [{ data: ph }, { data: prof }] = await Promise.all([
    supabase.from('listing_photos').select('storage_path,position').eq('listing_id', id).order('position'),
    supabase.from('profiles').select('display_name').eq('id', data.seller_id).maybeSingle(),
  ]);
  return {
    ...(data as Omit<ListingDetail, 'seller_name' | 'photos'>),
    seller_name: prof?.display_name ?? null,
    photos: (ph ?? []).map((p) => photoPublicUrl(p.storage_path as string)),
  };
}

export interface DiscoverFilters {
  lat: number; lng: number; radiusKm?: number; category?: number;
  minPrice?: number; maxPrice?: number; ageMonths?: number; query?: string; offset?: number;
}

export async function discover(f: DiscoverFilters): Promise<NearbyListing[]> {
  const { data, error } = await supabase.rpc('nearby_listings', {
    lat: f.lat, lng: f.lng, radius_km: f.radiusKm ?? 5,
    p_category: f.category ?? null, p_min_price: f.minPrice ?? null, p_max_price: f.maxPrice ?? null,
    p_age_months: f.ageMonths ?? null, p_query: f.query || null, p_limit: 30, p_offset: f.offset ?? 0,
  });
  if (error) throw error;
  const items = (data ?? []) as NearbyListing[];
  if (!items.length) return items;
  const { data: ph } = await supabase.from('listing_photos').select('listing_id,storage_path,position')
    .in('listing_id', items.map((i) => i.id)).eq('position', 0);
  const first = new Map((ph ?? []).map((p) => [p.listing_id as string, p.storage_path as string]));
  return items.map((i) => ({ ...i, photo_url: first.has(i.id) ? photoPublicUrl(first.get(i.id)!) : null }));
}
