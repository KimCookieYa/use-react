---
sidebar_position: 1
---

# useToggle

불리언 상태를 간단하게 토글할 수 있는 훅입니다. 상태를 반전시키는 함수를 제공하여 버튼 클릭, 체크박스 상태 변경 등의 토글 기능을 쉽게 구현할 수 있습니다.

## 기능

- 불리언 상태 관리
- 상태를 토글(반전)하는 함수 제공
- 초기값 설정 가능

## 사용법

```tsx
import { useToggle } from '@kimcookieya/use-react';

function ToggleExample() {
  const [isOn, toggle] = useToggle(false);
  
  return (
    <div>
      <p>현재 상태: {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>토글</button>
    </div>
  );
}
```

## 매개변수

- **initialValue** `boolean` (기본값: `false`)
  - 토글 상태의 초기값

## 반환값

- **value** `boolean`
  - 현재 토글 상태 값
  
- **toggle** `() => void`
  - 상태를 반전시키는 함수(true → false, false → true)

## 사용 사례

- 보여주기/숨기기 토글
- 다크/라이트 테마 전환
- 체크박스 컴포넌트
- 접을 수 있는 UI 요소 구현
- 모달 또는 사이드바 표시 여부 제어

## 구현 예시

```tsx
import { useToggle } from '@kimcookieya/use-react';

function Accordion() {
  const [isExpanded, toggleExpanded] = useToggle(false);
  
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleExpanded}>
        FAQ 항목
        <span>{isExpanded ? '▲' : '▼'}</span>
      </div>
      
      {isExpanded && (
        <div className="accordion-content">
          이곳에 내용이 표시됩니다.
        </div>
      )}
    </div>
  );
}
```
