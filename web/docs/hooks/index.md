---
sidebar_position: 1
---

# 훅 목록

이 섹션에서는 `use-react` 라이브러리에서 제공하는 다양한 커스텀 훅들에 대한 문서를 제공합니다.

## 기본 훅

기본적인 React 기능을 확장하는 간단한 훅들입니다.

- [useToggle](/docs/hooks/useToggle) - 불리언 상태를 쉽게 토글하는 훅
- [useInterval](/docs/hooks/useInterval) - setInterval을 React 친화적으로 사용하는 훅
- [useAsyncEffect](/docs/hooks/useAsyncEffect) - 비동기 함수를 useEffect에서 안전하게 사용하는 훅

## UI 및 이벤트 훅

사용자 인터페이스와 사용자 상호작용을 관리하는 훅들입니다.

- [useOnClickOutside](/docs/hooks/useOnClickOutside) - 특정 요소 외부 클릭을 감지하는 훅
- [useLockScroll](/docs/hooks/useLockScroll) - 페이지 스크롤을 잠그는 훅
- [useKeyboardEventListener](/docs/hooks/useKeyboardEventListener) - 키보드 이벤트를 처리하는 훅

## 데이터 훅

데이터 페칭과 관리를 위한 훅들입니다.

- [useFetch](/docs/hooks/useFetch) - API 요청을 처리하는 훅
- [useFetchUrl](/docs/hooks/useFetchUrl) - URL 기반 API 요청을 처리하는 훅
- [useValueObject](/docs/hooks/useValueObject) - 값 객체를 관리하는 훅

## 플랫폼 및 기능 훅

브라우저와 플랫폼별 기능을 활용하는 훅들입니다.

- [useWebNotification](/docs/hooks/useWebNotification) - 웹 알림 API를 사용하는 훅
- [usePlatform](/docs/hooks/usePlatform) - 현재 실행 플랫폼을 감지하는 훅
- [useWebview](/docs/hooks/useWebview) - 웹뷰 환경을 감지하고 통신하는 훅 