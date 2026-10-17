import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './src/lib/supabase';
import { AuthScreen } from './src/auth/AuthScreen';
import { DiscoverScreen } from './src/listings/DiscoverScreen';
import { CreateListingScreen } from './src/listings/CreateListingScreen';

type Tab = 'kesfet' | 'ilan';

// Keşfet girişsiz gezilebilir olmalı (RLS izin veriyor); iskelette şimdilik giriş şart. TODO.
export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [tab, setTab] = useState<Tab>('kesfet');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  if (!session) return <AuthScreen />;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {tab === 'kesfet' ? <DiscoverScreen /> : <CreateListingScreen onDone={() => setTab('kesfet')} />}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12 }}>
        <Button title="Keşfet" onPress={() => setTab('kesfet')} />
        <Button title="İlan ver" onPress={() => setTab('ilan')} />
        <Button title="Çıkış" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
}
