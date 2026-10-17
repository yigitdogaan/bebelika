import React, { useEffect, useState } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import type { Session } from '@supabase/supabase-js';
import { MOCK, supabase } from './src/lib/supabase';
import { AuthScreen } from './src/auth/AuthScreen';
import { saveAcquisitionSource } from './src/auth/source';
import { DiscoverScreen } from './src/listings/DiscoverScreen';
import { ListingDetailScreen } from './src/listings/ListingDetailScreen';
import { ChatScreen } from './src/chat/ChatScreen';
import { InboxScreen } from './src/chat/InboxScreen';
import { AccountScreen } from './src/account/AccountScreen';
import { CreateListingScreen } from './src/listings/CreateListingScreen';

type Tab = 'kesfet' | 'mesaj' | 'ilan' | 'profil';

// Keşfet girişsiz gezilebilir olmalı (RLS izin veriyor); iskelette şimdilik giriş şart. TODO.
export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [tab, setTab] = useState<Tab>('kesfet');
  const [open, setOpen] = useState<{ id: string; d: number } | null>(null);
  const [chat, setChat] = useState<string | null>(null);

  useEffect(() => {
    // Web: CSS büyük harf dönüşümü Türkçe kuralını (i→İ, ı→I) ancak lang=tr ile uygular ("GİRİŞ YAP").
    if (Platform.OS === 'web') document.documentElement.lang = 'tr';
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  const uid = session?.user.id;
  useEffect(() => { if (uid) saveAcquisitionSource(uid).catch(() => {}); }, [uid]);

  if (!session) return <AuthScreen />;
  return (
    <View style={{ flex: 1 }}>
      {MOCK && (
        <View accessibilityRole="summary" style={{ backgroundColor: '#fff1b8', paddingVertical: 4, paddingHorizontal: 12 }}>
          <Text style={{ fontSize: 12, textAlign: 'center' }}>Demo verisi: Bu bir demodur, ilanlar kurgudur.</Text>
        </View>)}
      <View style={{ flex: 1 }}>
        {tab === 'profil' ? <AccountScreen />
          : tab === 'ilan' ? <CreateListingScreen onDone={() => setTab('kesfet')} />
          : chat ? <ChatScreen conversationId={chat} onBack={() => setChat(null)}
              onOpenListing={(id) => { setChat(null); setOpen({ id, d: 0 }); }} />
          : open ? <ListingDetailScreen listingId={open.id} distanceM={open.d || undefined}
              onBack={() => setOpen(null)} onMessage={(cid) => setChat(cid)} />
          : tab === 'mesaj' ? <InboxScreen onOpen={(id) => setChat(id)} />
          : <DiscoverScreen onOpen={(id, d) => setOpen({ id, d })} />}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12 }}>
        <Button title="Keşfet" onPress={() => { setChat(null); setOpen(null); setTab('kesfet'); }} />
        <Button title="Mesajlar" onPress={() => { setChat(null); setOpen(null); setTab('mesaj'); }} />
        <Button title="İlan ver" onPress={() => setTab('ilan')} />
        <Button title="Profil" onPress={() => { setChat(null); setOpen(null); setTab('profil'); }} />
      </View>
    </View>
  );
}
