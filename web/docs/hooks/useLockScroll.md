---
sidebar_position: 5
---

# useLockScroll

페이지의 스크롤을 잠그는 훅입니다. 모달이나 팝업이 열렸을 때 배경 페이지의 스크롤을 방지하여 사용자 경험을 향상시키는데 유용합니다.

## 기능

- 페이지 스크롤 잠금/해제
- 컴포넌트 언마운트 시 자동으로 스크롤 상태 복원
- `useLayoutEffect`를 사용하여 DOM 레이아웃 계산 전에 스크롤 잠금 적용

## 사용법

```tsx
import { useState } from 'react';
import { useLockScroll } from '@kimcookieya/use-react';

function ModalExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 모달이 열렸을 때만 스크롤 잠금
  useLockScroll(isModalOpen);
  
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>모달 열기</button>
      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>모달 제목</h2>
            <p>모달 내용...</p>
            <button onClick={() => setIsModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}
```

## 매개변수

- **isLocked** `boolean` (기본값: `true`)
  - `true`: 스크롤 잠금 활성화
  - `false`: 스크롤 잠금 비활성화

## 사용 사례

- 모달 다이얼로그
- 풀스크린 메뉴
- 슬라이드인 사이드바
- 이미지 갤러리 확대 보기
- 중요 알림 표시

## 구현 예시: 풀스크린 메뉴

```tsx
import { useState } from 'react';
import { useLockScroll } from '@kimcookieya/use-react';

function FullscreenMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 메뉴가 열렸을 때 스크롤 잠금
  useLockScroll(isMenuOpen);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <>
      <header className="site-header">
        <div className="logo">Site Logo</div>
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      
      {isMenuOpen && (
        <div className="fullscreen-menu">
          <nav>
            <ul>
              <li><a href="/">홈</a></li>
              <li><a href="/about">소개</a></li>
              <li><a href="/services">서비스</a></li>
              <li><a href="/contact">연락처</a></li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
```

## 주의사항

- iOS Safari에서는 추가적인 처리가 필요할 수 있습니다.
- 스크롤바가 사라지면서 레이아웃이 변경될 수 있으므로, 필요한 경우 패딩 조정을 고려해야 합니다.
- 페이지 내에 여러 개의 스크롤 잠금이 동시에 활성화될 경우 충돌을 관리해야 합니다.
- 접근성(a11y)을 위해 모달이나 메뉴가 열렸을 때 적절한 키보드 포커스 관리와 함께 사용하는 것이 좋습니다.
