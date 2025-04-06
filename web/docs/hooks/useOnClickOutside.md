---
sidebar_position: 4
---

# useOnClickOutside

특정 DOM 요소의 외부를 클릭했을 때 콜백 함수를 실행하는 훅입니다. 모달, 드롭다운, 팝업 등의 UI 컴포넌트를 구현할 때 외부 클릭을 감지하여 닫는 기능을 쉽게 구현할 수 있습니다.

## 기능

- 특정 DOM 요소 외부 클릭/터치 감지
- 마우스 및 터치 이벤트 모두 지원
- 컴포넌트 언마운트 시 이벤트 리스너 자동 정리

## 사용법

```tsx
import { useRef } from 'react';
import { useOnClickOutside } from '@kimcookieya/use-react';

function Modal({ onClose, children }) {
  const modalRef = useRef(null);
  
  useOnClickOutside(modalRef, () => {
    onClose();
  });
  
  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
```

## 매개변수

- **ref** `RefObject<T extends HTMLElement>`
  - 외부 클릭을 감지할 DOM 요소의 참조
  
- **handler** `(event: MouseEvent | TouchEvent) => void`
  - 외부 클릭 시 실행될 콜백 함수

## 사용 사례

- 모달 창 닫기
- 드롭다운 메뉴 닫기
- 팝오버 UI 컴포넌트
- 컨텍스트 메뉴
- 사이드바 닫기

## 구현 예시: 드롭다운 메뉴

```tsx
import { useRef, useState } from 'react';
import { useOnClickOutside } from '@kimcookieya/use-react';

function Dropdown({ items, placeholder = '선택하세요' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);
  
  useOnClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedItem ? selectedItem.label : placeholder}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li 
              key={item.id} 
              onClick={() => handleSelect(item)}
              className={selectedItem?.id === item.id ? 'selected' : ''}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## 주의사항

- 이벤트 위임(Event Delegation)이 필요한 복잡한 UI에서는 추가 로직이 필요할 수 있습니다.
- 중첩된 모달이나 팝업의 경우 이벤트 전파를 적절히 제어해야 합니다.
- React 포털을 사용하는 경우에도 정상적으로 작동합니다.
- 성능 최적화를 위해 handler 함수를 `useCallback`으로 감싸는 것을 고려하세요.
