import React, { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
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
      <Text style={s.t}>Bebelika</Text>
      <TextInput style={s.i} placeholder="E-posta" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={s.i} placeholder="Şifre (en az 8)" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Giriş yap" onPress={() => run(() => signInEmail(email, password))} />
      <Button
        title="Kayıt ol"
        onPress={() =>
          run(async () => {
            const r = await signUpEmail(email, password);
            if (!r.error) Alert.alert('E-postanı doğrula', 'Gelen bağlantıyla hesabını onayla.');
            return r;
          })
        }
      />
      {Platform.OS === 'ios' && <Button title="Apple ile devam et" onPress={() => run(signInApple)} />}
      <Button title="Google ile devam et" onPress={() => run(signInGoogle)} />
    </View>
  );
}

const s = StyleSheet.create({
  c: { flex: 1, justifyContent: 'center', padding: 24, gap: 12 },
  t: { fontSize: 28, fontWeight: '700', textAlign: 'center' },
  i: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12 },
});
