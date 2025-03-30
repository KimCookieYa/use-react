import { useMemo } from 'react';

type Platform = 'ios' | 'android' | 'unknown';

export default function usePlatform() {
  const platform: Platform = useMemo(() => {
    if (typeof window === 'undefined') {
      return 'unknown';
    }
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'ios';
    }
    if (/android/.test(userAgent)) {
      return 'android';
    }
    return 'unknown';
  }, []);

  return {
    platform,
    isIOS: platform === 'ios',
    isAndroid: platform === 'android',
    isUnknown: platform === 'unknown',
  };
}
