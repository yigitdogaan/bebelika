import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { confirmDialog, notify } from '../lib/dialog';
import { MOCK, supabase } from '../lib/supabase';
import { changeLocation } from '../listings/useLocation';
import { deleteMyAccount, getMyProfile, type ProfileInfo } from './api';

const MIN = 48;

/** Profil + ayarlar. Puan/teslim sayısı F6-F7 gelene kadar gösterilmez (olmayan veriyi uydurma). */
export function AccountScreen({ onSignedOut }: { onSignedOut?: () => void }) {
  const [p, setP] = useState<ProfileInfo | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  useEffect(() => { getMyProfile().then(setP).catch(() => setP(null)); }, []);

  function askDelete() {
    confirmDialog('Hesabını ve verilerini sil',
      'İlanların, fotoğrafların, mesajların ve profilin kalıcı olarak silinir. Bu işlem geri alınamaz.', 'Sil', async () => {
        setBusy(true);
        try { await deleteMyAccount(); onSignedOut?.(); }
        catch { notify('Silinemedi', 'Bağlantını kontrol edip tekrar dene.'); setBusy(false); }
      });
  }

  if (p === undefined) return <ActivityIndicator style={{ marginTop: 64 }} />;
  const row = { minHeight: MIN, justifyContent: 'center' as const, borderBottomWidth: 1, borderColor: '#ddd' };
  return (
    <View style={{ flex: 1, padding: 16, paddingTop: 56, gap: 8 }}>
      <Text accessibilityRole="header" style={{ fontSize: 22, fontWeight: '700' }}>{p?.display_name ?? 'Profil'}</Text>
      <Text>Yeni üye · {p?.listingCount ?? 0} ilan</Text>
      {MOCK && <Text style={{ color: '#555' }}>Demo hesabı: puan ve teslim bilgisi örnek değildir, yakında.</Text>}
      <Text accessibilityRole="header" style={{ fontWeight: '700', marginTop: 16 }}>Ayarlar</Text>
      {!MOCK && (
        <Pressable onPress={changeLocation} accessibilityRole="button" style={row}><Text>Konum / ilçe değiştir</Text></Pressable>)}
      <Pressable onPress={() => { void supabase.auth.signOut(); onSignedOut?.(); }} accessibilityRole="button" style={row}>
        <Text>Çıkış yap</Text></Pressable>
      <Pressable onPress={askDelete} disabled={busy} accessibilityRole="button" style={row}>
        <Text style={{ color: '#b00020', fontWeight: '700' }}>{busy ? 'Siliniyor…' : 'Hesabımı ve verilerimi sil'}</Text></Pressable>
    </View>
  );
}
