---
sidebar_position: 11
---

# useWebview

현재 애플리케이션이 실행 중인 웹뷰 환경을 감지하는 훅입니다. Instagram, KakaoTalk, Facebook, Line 등과 같은 인앱 브라우저를 식별하여 특정 웹뷰 환경에 맞는 동작을 구현할 수 있습니다.

## 기능

- 인앱 브라우저(웹뷰) 환경 감지
- 특정 소셜 미디어/메신저 앱의 웹뷰 식별
- 웹뷰별 조건부 로직 간소화

## 사용법

```tsx
import { useWebview } from '@kimcookieya/use-react';

function WebviewAwareComponent() {
  const { 
    webView, 
    isInstagramWebView, 
    isKakaoWebView, 
    isFacebookWebView,
    isLineWebView,
    isUnknownWebView
  } = useWebview();
  
  return (
    <div>
      <h2>현재 웹뷰: {webView}</h2>
      
      {isInstagramWebView && (
        <div className="instagram-notice">
          Instagram 앱 내에서 보고 계십니다.
        </div>
      )}
      
      {isKakaoWebView && (
        <div className="kakao-notice">
          KakaoTalk 앱 내에서 보고 계십니다.
        </div>
      )}
      
      {isFacebookWebView && (
        <div className="facebook-notice">
          Facebook 앱 내에서 보고 계십니다.
        </div>
      )}
      
      {isLineWebView && (
        <div className="line-notice">
          Line 앱 내에서 보고 계십니다.
        </div>
      )}
      
      {isUnknownWebView && (
        <div className="browser-notice">
          일반 브라우저에서 보고 계십니다.
        </div>
      )}
    </div>
  );
}
```

## 반환값

- **webView** `'instagram' | 'kakaotalk' | 'facebook' | 'line' | 'unknown'`
  - 감지된 웹뷰 환경 문자열
- **isInstagramWebView** `boolean`
  - Instagram 인앱 브라우저에서 실행 중인지 여부
- **isKakaoWebView** `boolean`
  - KakaoTalk 인앱 브라우저에서 실행 중인지 여부
- **isFacebookWebView** `boolean`
  - Facebook 인앱 브라우저에서 실행 중인지 여부
- **isLineWebView** `boolean`
  - Line 인앱 브라우저에서 실행 중인지 여부
- **isUnknownWebView** `boolean`
  - 알려진 인앱 브라우저가 아닌 환경(일반 브라우저 포함)에서 실행 중인지 여부

## 사용 사례

- 웹뷰별 UI 컴포넌트 렌더링
- 웹뷰 제한사항에 맞는 대체 기능 제공
- 공유 기능 최적화
- 웹뷰별 스타일 및 애니메이션 조정
- 특정 웹뷰 환경에서의 버그 회피

## 구현 예시: 공유 버튼

```tsx
import { useWebview } from '@kimcookieya/use-react';

function ShareButton({ url, title }) {
  const { 
    isInstagramWebView, 
    isKakaoWebView, 
    isFacebookWebView,
    isLineWebView,
    isUnknownWebView
  } = useWebview();
  
  const handleShare = () => {
    // 웹뷰에 따른 공유 방식 분기
    if (isInstagramWebView) {
      // Instagram은 Web Share API를 지원하지 않으므로 클립보드 복사로 대체
      navigator.clipboard.writeText(url)
        .then(() => alert('URL이 클립보드에 복사되었습니다.'))
        .catch(() => alert('클립보드 복사에 실패했습니다.'));
    } 
    else if (isKakaoWebView && window.Kakao) {
      // KakaoTalk API를 사용한 공유
      window.Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description: '이 콘텐츠를 확인해보세요!',
          imageUrl: 'thumbnail.jpg',
          link: { webUrl: url, mobileWebUrl: url }
        },
        buttons: [
          { title: '웹으로 보기', link: { webUrl: url, mobileWebUrl: url } }
        ]
      });
    }
    else if (navigator.share && isUnknownWebView) {
      // Web Share API 지원 브라우저
      navigator.share({
        title,
        url
      }).catch(err => console.error('공유 실패:', err));
    }
    else {
      // 폴백: 클립보드 복사
      navigator.clipboard.writeText(url)
        .then(() => alert('URL이 클립보드에 복사되었습니다.'))
        .catch(() => alert('클립보드 복사에 실패했습니다.'));
    }
  };
  
  return (
    <button onClick={handleShare} className="share-button">
      <ShareIcon />
      <span>공유하기</span>
    </button>
  );
}
```

## 주의사항

- User Agent 스니핑은 100% 정확하지 않을 수 있으며, 웹뷰 구현이 변경될 수 있습니다.
- SSR(서버 사이드 렌더링) 환경에서는 'unknown'을 반환합니다.
- 일부 인앱 브라우저는 기능 제한(쿠키 관리, localStorage 제한 등)이 있을 수 있습니다.
- 웹뷰 환경은 일반 브라우저보다 기능적 제약이 많을 수 있으므로 폴백 기능을 구현하는 것이 좋습니다.
