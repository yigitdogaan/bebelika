import { Platform } from 'react-native';
import { supabase } from '../lib/supabase';

// Kayıt kaynağı (lansman.md §4): web bağlantısındaki ?utm_source=... ve ?davet=... okunur, ilk girişte profiles'a yazılır.
// Kişisel veri değildir; DB tarafı (0007) biçimi doğrular ve bir kez yazılmasına izin verir. Mobilde derin bağlantı sonra.
const SRC = /^[a-z0-9_-]{1,32}$/;
const INV = /^[A-Za-z0-9]{4,12}$/;

export async function saveAcquisitionSource(userId: string): Promise<void> {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return;
  const q = new URLSearchParams(window.location.search);
  const utm = (q.get('utm_source') ?? '').toLowerCase();
  const inv = q.get('davet') ?? '';
  const patch: Record<string, string> = {};
  if (SRC.test(utm)) patch.utm_source = utm;
  if (INV.test(inv)) patch.invite_code = inv;
  if (!Object.keys(patch).length) return;
  await supabase.from('profiles').update(patch).eq('id', userId); // hata yoksayılır: kayıt akışını bozmasın
}
