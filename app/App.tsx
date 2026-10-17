import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './src/lib/supabase';
import { AuthScreen } from './src/auth/AuthScreen';
import { DiscoverScreen } from './src/listings/DiscoverScreen';
import { ListingDetailScreen } from './src/listings/ListingDetailScreen';
import { ChatScreen } from './src/chat/ChatScreen';
import { CreateListingScreen } from './src/listings/CreateListingScreen';

type Tab = 'kesfet' | 'ilan';

// Keşfet girişsiz gezilebilir olmalı (RLS izin veriyor); iskelette şimdilik giriş şart. TODO.
export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [tab, setTab] = useState<Tab>('kesfet');
  const [open, setOpen] = useState<{ id: string; d: number } | null>(null);
  const [chat, setChat] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  if (!session) return <AuthScreen />;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {tab === 'ilan' ? <CreateListingScreen onDone={() => setTab('kesfet')} />
          : chat ? <ChatScreen conversationId={chat} onBack={() => setChat(null)}
              onOpenListing={(id) => { setChat(null); setOpen({ id, d: 0 }); }} />
          : open ? <ListingDetailScreen listingId={open.id} distanceM={open.d || undefined}
              onBack={() => setOpen(null)} onMessage={(cid) => setChat(cid)} />
          : <DiscoverScreen onOpen={(id, d) => setOpen({ id, d })} />}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12 }}>
        <Button title="Keşfet" onPress={() => setTab('kesfet')} />
        <Button title="İlan ver" onPress={() => setTab('ilan')} />
        <Button title="Çıkış" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
}
