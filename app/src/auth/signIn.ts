import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { supabase } from '../lib/supabase';

export const signUpEmail = (email: string, password: string) =>
  supabase.auth.signUp({ email, password });

export const signInEmail = (email: string, password: string) =>
  supabase.auth.signInWithPassword({ email, password });

export async function signInApple() {
  const rawNonce = Crypto.randomUUID();
  const hashed = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, rawNonce);
  const cred = await AppleAuthentication.signInAsync({
    requestedScopes: [AppleAuthentication.AppleAuthenticationScope.EMAIL],
    nonce: hashed,
  });
  if (!cred.identityToken) throw new Error('Apple kimlik jetonu alınamadı');
  return supabase.auth.signInWithIdToken({ provider: 'apple', token: cred.identityToken, nonce: rawNonce });
}

export async function signInGoogle() {
  GoogleSignin.configure({
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
  });
  await GoogleSignin.hasPlayServices();
  const res = await GoogleSignin.signIn();
  const token = res.data?.idToken;
  if (!token) throw new Error('Google kimlik jetonu alınamadı');
  return supabase.auth.signInWithIdToken({ provider: 'google', token });
}
