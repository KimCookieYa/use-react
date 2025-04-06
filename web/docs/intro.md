---
sidebar_position: 1
---

# use-react 소개

**use-react**는 React 애플리케이션 개발 시 자주 사용되는 커스텀 훅(Custom Hook)들을 모아놓은 라이브러리입니다. 이 라이브러리는 반복적인 로직을 추상화하여 코드의 재사용성을 높이고, 개발 경험을 향상시키는 것을 목표로 합니다.

## 주요 기능

- **기본 훅**: 상태 관리 및 기본적인 React 기능을 확장하는 훅
- **UI 및 이벤트 훅**: 사용자 인터페이스 및 이벤트 처리를 위한 훅
- **데이터 훅**: 데이터 페칭 및 관리를 위한 훅
- **플랫폼 및 기능 훅**: 웹 API 및 특정 플랫폼 기능을 활용하는 훅

## 시작하기

### 설치

```bash
npm install @kimcookieya/use-react
```

### 사용 방법

```tsx
import { useToggle } from '@kimcookieya/use-react';

function ToggleComponent() {
  const [value, toggle] = useToggle(false);
  
  return (
    <div>
      <p>현재 상태: {value ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>토글</button>
    </div>
  );
}
```

각 훅에 대한 자세한 설명은 사이드바의 카테고리별 문서를 참조하세요.
