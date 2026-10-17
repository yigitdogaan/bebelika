import React, { useState } from 'react';
import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import { MOCK } from '../lib/supabase';
import { Button } from '../ui/Button';
import { TextField } from '../ui/TextField';
import { bosluk, renk, yaricap, yazi } from '../ui/theme';
import { signInApple, signInEmail, signInGoogle, signUpEmail } from './signIn';

type Result = { error: { message: string } | null };

export function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const run = async (fn: () => Promise<Result>) => {
    try {
      const { error } = await fn();
      if (error) Alert.alert('Hata', error.message);
    } catch (e) {
      Alert.alert('Hata', e instanceof Error ? e.message : 'Bilinmeyen hata');
    }
  };

  return (
    <View style={s.c}>
      <View style={s.ust}>
        <Text style={s.marka}>Bebelika</Text>
        <Text style={[yazi.govde, s.slogan]}>Bebek ve anne ürünleri, mahallenden elden teslim.</Text>
      </View>
      {MOCK && (
        <View style={s.demo}>
          <Text style={s.demoMetin}>Demo sürüm: örnek verilerle çalışır, gerçek hesap yok.</Text>
          <Button baslik="Demo olarak gir" onPress={() => run(() => signInEmail('demo@bebelika.test', 'demo-demo'))} />
        </View>
      )}
      <TextField placeholder="E-posta" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextField placeholder="Şifre (en az 8 karakter)" secureTextEntry value={password} onChangeText={setPassword} />
      <Button baslik="Giriş yap" tur={MOCK ? 'ikincil' : 'birincil'} onPress={() => run(() => signInEmail(email, password))} />
      <Button
        baslik="Kayıt ol"
        tur="metin"
        onPress={() =>
          run(async () => {
            const r = await signUpEmail(email, password);
            if (!r.error) Alert.alert('E-postanı doğrula', 'Gelen bağlantıyla hesabını onayla.');
            return r;
          })
        }
      />
      <Text style={[yazi.yardimci, s.veya]}>veya</Text>
      {Platform.OS === 'ios' && <Button baslik="Apple ile devam et" tur="ikincil" onPress={() => run(signInApple)} />}
      <Button baslik="Google ile devam et" tur="ikincil" onPress={() => run(signInGoogle)} />
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, justifyContent: 'center', padding: bosluk.l, gap: bosluk.m, backgroundColor: renk.zemin },
  ust: { alignItems: 'center', gap: bosluk.s, marginBottom: bosluk.m },
  marka: { ...yazi.baslik1, fontSize: 36, lineHeight: 42, color: renk.anaKoyu },
  slogan: { textAlign: 'center', color: renk.metinIkincil },
  demo: { backgroundColor: renk.naneAcik, borderRadius: yaricap.l, padding: bosluk.m, gap: bosluk.s },
  demoMetin: { ...yazi.yardimci, color: renk.metin, textAlign: 'center' },
  veya: { textAlign: 'center' },
});
