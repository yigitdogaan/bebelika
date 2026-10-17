import { Alert, Platform } from 'react-native';

// react-native-web'de Alert.alert hiçbir şey yapmaz (hata ve onay penceresi görünmez). Web'de tarayıcı penceresi kullan.
export function notify(title: string, message?: string) {
  if (Platform.OS === 'web') { window.alert(message ? `${title}\n\n${message}` : title); return; }
  Alert.alert(title, message);
}

export function confirmDialog(title: string, message: string, okLabel: string, onOk: () => void) {
  if (Platform.OS === 'web') { if (window.confirm(`${title}\n\n${message}`)) onOk(); return; }
  Alert.alert(title, message, [
    { text: 'Vazgeç', style: 'cancel' },
    { text: okLabel, style: 'destructive', onPress: onOk },
  ]);
}
