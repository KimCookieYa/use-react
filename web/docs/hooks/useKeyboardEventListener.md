---
sidebar_position: 6
---

# useKeyboardEventListener

키보드 이벤트를 감지하고 처리하는 훅입니다. 특정 키가 눌렸을 때 콜백 함수를 실행하여 키보드 단축키, 접근성 향상 등의 기능을 쉽게 구현할 수 있습니다.

## 기능

- 특정 키 입력 감지
- 타입스크립트로 정의된 키보드 키 타입 제공
- 표준 키보드 이벤트 리스너 옵션 지원
- 컴포넌트 언마운트 시 이벤트 리스너 자동 정리

## 사용법

```tsx
import { useKeyboardEventListener } from '@kimcookieya/use-react';

function KeyboardShortcutExample() {
  // Escape 키를 누르면 모달 닫기
  useKeyboardEventListener('Escape', () => {
    console.log('Escape 키가 눌렸습니다!');
    closeModal();
  });
  
  // Enter 키를 누르면 폼 제출
  useKeyboardEventListener('Enter', (event) => {
    if (isFormValid) {
      submitForm();
    }
  });
  
  return (
    <div>
      <p>Escape 키를 눌러 모달을 닫거나, Enter 키를 눌러 폼을 제출하세요.</p>
    </div>
  );
}
```

## 매개변수

- **key** `KeyboardKey`
  - 감지할 키보드 키
  - 타입스크립트로 정의된 키 타입 (Escape, Enter, ArrowLeft 등)
  
- **callback** `(event: KeyboardEvent) => void`
  - 키가 눌렸을 때 실행할 콜백 함수
  - 표준 KeyboardEvent 객체를 인자로 받음
  
- **options** `boolean | AddEventListenerOptions` (선택적)
  - 이벤트 리스너에 전달할 옵션
  - `capture`, `passive`, `once` 등의 옵션 설정 가능

## 지원하는 키

```typescript
type KeyboardKey =
  | 'Backspace' | 'Tab' | 'Enter' | 'Shift' | 'Control' | 'Alt' | 'CapsLock'
  | 'Escape' | 'Space' | ' ' | 'PageUp' | 'PageDown' | 'End' | 'Home'
  | 'ArrowLeft' | 'ArrowUp' | 'ArrowRight' | 'ArrowDown'
  | 'Insert' | 'Delete' | 'Meta' | 'ContextMenu'
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  | 'a' | 'b' | 'c' /* ... 알파벳 소문자 ... */ | 'z'
  | 'A' | 'B' | 'C' /* ... 알파벳 대문자 ... */ | 'Z'
  | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12'
  | ';' | '=' | ',' | '-' | '.' | '/' | '`' | '[' | '\\' | ']' | "'";
```

## 사용 사례

- 키보드 단축키 구현
- 접근성 향상을 위한 키보드 내비게이션
- 게임 컨트롤
- 모달 닫기 (Escape 키)
- 폼 제출 (Enter 키)

## 구현 예시: 화살표 키로 갤러리 탐색

```tsx
import { useState } from 'react';
import { useKeyboardEventListener } from '@kimcookieya/use-react';

function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };
  
  // 왼쪽 화살표 키로 이전 이미지
  useKeyboardEventListener('ArrowLeft', goToPrevious);
  
  // 오른쪽 화살표 키로 다음 이미지
  useKeyboardEventListener('ArrowRight', goToNext);
  
  return (
    <div className="gallery">
      <img 
        src={images[currentIndex]} 
        alt={`Gallery image ${currentIndex + 1}`} 
      />
      <div className="controls">
        <button onClick={goToPrevious}>이전</button>
        <span>{currentIndex + 1} / {images.length}</span>
        <button onClick={goToNext}>다음</button>
      </div>
      <p className="hint">← → 화살표 키를 사용하여 이미지를 탐색하세요</p>
    </div>
  );
}
```

## 주의사항

- 전역 키보드 이벤트를 등록하므로, 입력 필드 내에서도 작동합니다. 필요에 따라 `event.target` 검사를 추가하세요.
- 여러 컴포넌트에서 같은 키에 대한 리스너를 등록할 경우 모두 실행됩니다. 필요에 따라 `event.stopPropagation()`을 사용하세요.
- 성능 최적화를 위해 콜백 함수는 `useCallback`으로 메모이제이션하는 것이 좋습니다.
