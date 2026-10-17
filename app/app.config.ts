import type { ExpoConfig } from 'expo/config';

// Gizli değer yok: yalnızca herkese açık EXPO_PUBLIC_* değişkenleri (anon key RLS ile korunur).
const config: ExpoConfig = {
  name: 'Bebelika',
  slug: 'bebelika',
  version: '0.1.0',
  scheme: 'bebelika',
  orientation: 'portrait',
  ios: { bundleIdentifier: 'com.bebelika.app', usesAppleSignIn: true },
  android: { package: 'com.bebelika.app' },
  plugins: ['expo-secure-store', 'expo-apple-authentication', '@react-native-google-signin/google-signin'],
};
export default config;
