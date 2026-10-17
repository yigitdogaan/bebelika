import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { createMockClient } from './mock/client';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anon = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

/** Supabase ayarı yoksa uygulama bellek-içi örnek veriyle (demo) çalışır. */
export const MOCK = !url || !anon;

// Oturum token'ları Keychain/Keystore'da (OWASP Mobile M9).
// Not: SecureStore değer sınırı ~2KB; büyürse parçalama eklenecek.
const storage = {
  getItem: (k: string) => SecureStore.getItemAsync(k),
  setItem: (k: string, v: string) => SecureStore.setItemAsync(k, v),
  removeItem: (k: string) => SecureStore.deleteItemAsync(k),
};

export const supabase: SupabaseClient = MOCK
  ? (createMockClient() as unknown as SupabaseClient)
  : createClient(url!, anon!, {
      auth: { storage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false },
    });
