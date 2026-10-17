import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

// Yaklaşık konum yeter (Balanced). Rıza metni/ayrı ekran ve consent_location_at yazımı TODO.
export function useLocation() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [denied, setDenied] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return setDenied(true);
      const p = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Balanced });
      setCoords({ lat: p.coords.latitude, lng: p.coords.longitude });
    })().catch(() => setDenied(true));
  }, []);
  return { coords, denied };
}
