---
sidebar_position: 10
---

# usePlatform

현재 사용자의 디바이스 플랫폼(iOS, Android 또는 기타)을 감지하는 훅입니다. 디바이스별 기능이나 스타일을 적용해야 할 때 유용하게 사용할 수 있습니다.

## 기능

- 사용자 에이전트 기반 플랫폼 감지
- iOS/Android 디바이스 구분
- 플랫폼별 조건부 로직 간소화

## 사용법

```tsx
import { usePlatform } from '@kimcookieya/use-react';

function PlatformSpecificComponent() {
  const { platform, isIOS, isAndroid, isUnknown } = usePlatform();
  
  return (
    <div>
      <h2>현재 플랫폼: {platform}</h2>
      
      {isIOS && (
        <div className="ios-specific">
          iOS 디바이스에서만 보이는 컨텐츠
        </div>
      )}
      
      {isAndroid && (
        <div className="android-specific">
          Android 디바이스에서만 보이는 컨텐츠
        </div>
      )}
      
      {isUnknown && (
        <div className="desktop-specific">
          데스크톱 또는 기타 디바이스에서 보이는 컨텐츠
        </div>
      )}
    </div>
  );
}
```

## 반환값

- **platform** `'ios' | 'android' | 'unknown'`
  - 감지된 플랫폼 문자열
- **isIOS** `boolean`
  - iOS 디바이스 여부
- **isAndroid** `boolean`
  - Android 디바이스 여부
- **isUnknown** `boolean`
  - iOS나 Android가 아닌 디바이스 여부 (데스크톱, 기타 모바일 OS 등)

## 사용 사례

- 플랫폼별 UI 컴포넌트 렌더링
- 모바일 OS에 따른 인터랙션 조정
- 앱스토어 링크 분기 처리
- 스타일 및 애니메이션 커스터마이징
- 디바이스별 기능 활성화/비활성화

## 구현 예시: 앱 다운로드 버튼

```tsx
import { usePlatform } from '@kimcookieya/use-react';

function AppDownloadButton() {
  const { isIOS, isAndroid, isUnknown } = usePlatform();
  
  // 플랫폼별 스토어 URL
  const getStoreUrl = () => {
    if (isIOS) {
      return 'https://apps.apple.com/app/your-app-id';
    }
    if (isAndroid) {
      return 'https://play.google.com/store/apps/details?id=your.app.package';
    }
    return '/download'; // 기본 다운로드 페이지
  };
  
  // 플랫폼별 버튼 텍스트
  const getButtonText = () => {
    if (isIOS) {
      return 'App Store에서 다운로드';
    }
    if (isAndroid) {
      return 'Google Play에서 다운로드';
    }
    return '앱 다운로드';
  };
  
  // 플랫폼별 아이콘
  const Icon = () => {
    if (isIOS) {
      return <AppleIcon />;
    }
    if (isAndroid) {
      return <AndroidIcon />;
    }
    return <DownloadIcon />;
  };
  
  return (
    <a 
      href={getStoreUrl()} 
      className={`download-button ${isIOS ? 'ios' : isAndroid ? 'android' : 'generic'}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
      <span>{getButtonText()}</span>
    </a>
  );
}
```

## 주의사항

- User Agent 스니핑은 100% 정확하지 않을 수 있습니다.
- SSR(서버 사이드 렌더링) 환경에서는 'unknown'을 반환합니다.
- 최신 모바일 브라우저에서는 User Agent가 변경되거나 숨겨질 수 있습니다.
- 웹뷰 환경에서는 호스트 앱의 User Agent를 반환할 수 있습니다.
