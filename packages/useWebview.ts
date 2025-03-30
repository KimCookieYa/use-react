import { useMemo } from 'react';

type WebView = 'instagram' | 'kakaotalk' | 'facebook' | 'line' | 'unknown';

export default function useWebview() {
  const webView: WebView = useMemo(() => {
    if (typeof window === 'undefined') {
      return 'unknown';
    }

    const userAgent = window.navigator.userAgent.toLowerCase();

    if (/instagram/.test(userAgent)) {
      return 'instagram';
    }
    if (/kakaotalk|kakao/.test(userAgent)) {
      return 'kakaotalk';
    }
    if (/fb_iab|fban|fbav/.test(userAgent)) {
      return 'facebook';
    }
    if (/line/.test(userAgent)) {
      return 'line';
    }

    return 'unknown';
  }, []);

  return {
    webView,
    isInstagramWebView: webView === 'instagram',
    isKakaoWebView: webView === 'kakaotalk',
    isFacebookWebView: webView === 'facebook',
    isLineWebView: webView === 'line',
    isUnknownWebView: webView === 'unknown',
  };
}
