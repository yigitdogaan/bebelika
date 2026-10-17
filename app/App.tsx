import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './src/lib/supabase';
import { AuthScreen } from './src/auth/AuthScreen';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  if (!session) return <AuthScreen />;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
      <Text>Merhaba {session.user.email}</Text>
      <Button title="Çıkış" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
