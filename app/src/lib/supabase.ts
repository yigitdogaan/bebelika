import 'react-native-url-polyfill/auto';
import * as SecureStore from 'expo-secure-store';
import { createClient } from '@supabase/supabase-js';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anon = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !anon) throw new Error('EXPO_PUBLIC_SUPABASE_URL / _ANON_KEY tanımlı değil (.env)');

// Oturum token'ları Keychain/Keystore'da (OWASP Mobile M9).
// Not: SecureStore değer sınırı ~2KB; büyürse parçalama eklenecek.
const storage = {
  getItem: (k: string) => SecureStore.getItemAsync(k),
  setItem: (k: string, v: string) => SecureStore.setItemAsync(k, v),
  removeItem: (k: string) => SecureStore.deleteItemAsync(k),
};

export const supabase = createClient(url, anon, {
  auth: { storage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false },
});
