import { supabase } from '../lib/supabase';
import { deleteListing, myListings } from '../listings/api';

export interface ProfileInfo { id: string; display_name: string | null; listingCount: number }

export async function getMyProfile(): Promise<ProfileInfo | null> {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) return null;
  const [{ data: p }, mine] = await Promise.all([
    supabase.from('profiles').select('display_name').eq('id', u.user.id).maybeSingle(),
    myListings().catch(() => []),
  ]);
  return { id: u.user.id, display_name: p?.display_name ?? null, listingCount: mine.length };
}

/**
 * Hesabı ve verileri siler (KVKK/mağaza gereği). Sıra: önce ilan fotoğrafları (Storage, DB cascade silmez),
 * sonra delete_my_account (auth.users -> cascade: profil, ilan, mesaj, engel), sonra oturum kapanır.
 * Yasal saklama istisnası (şikâyet kayıtları) için bkz. docs/teknik/aydinlatma-sema-karsilastirma.md.
 */
export async function deleteMyAccount(): Promise<void> {
  const mine = await myListings();
  for (const l of mine) await deleteListing(l.id as string);
  const { error } = await supabase.rpc('delete_my_account');
  if (error) throw error;
  await supabase.auth.signOut();
}
