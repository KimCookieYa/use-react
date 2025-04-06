---
sidebar_position: 2
---

# useInterval

`setInterval`을 React의 생명주기에 맞게 사용할 수 있는 훅입니다. 컴포넌트가 언마운트될 때 자동으로 인터벌을 정리하여 메모리 누수를 방지합니다.

## 기능

- React 생명주기와 통합된 `setInterval` 기능
- 컴포넌트 언마운트 시 자동 정리(cleanup)
- 비동기 함수 지원

## 사용법

```tsx
import { useInterval } from '@kimcookieya/use-react';

function IntervalExample() {
  const [count, setCount] = useState(0);
  
  useInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);
  
  return <p>카운트: {count}</p>;
}
```

## 매개변수

- **callback** `() => void | Promise<void>`
  - 주기적으로 실행할 함수
  - 비동기 함수(Promise 반환)도 사용 가능
  
- **delay** `number`
  - 실행 간격(밀리초)

## 사용 사례

- 주기적 데이터 폴링
- 카운트다운 타이머
- 자동 슬라이드 쇼
- 주기적인 UI 업데이트
- 실시간 데이터 동기화

## 구현 예시: 카운트다운 타이머

```tsx
import { useState } from 'react';
import { useInterval } from '@kimcookieya/use-react';

function CountdownTimer({ initialSeconds = 60 }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  
  useInterval(
    () => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setIsActive(false);
      }
    },
    isActive ? 1000 : null
  );
  
  const toggleTimer = () => {
    setIsActive(!isActive);
  };
  
  const resetTimer = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
  };
  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  return (
    <div>
      <div className="timer">{formatTime(seconds)}</div>
      <button onClick={toggleTimer}>{isActive ? '일시정지' : '시작'}</button>
      <button onClick={resetTimer}>초기화</button>
    </div>
  );
}
```

## 주의사항

- 콜백 함수에서 사용하는 외부 변수는 의존성으로 추가하는 것이 좋습니다.
- `delay`가 자주 변경될 경우 성능에 영향을 줄 수 있습니다.
- 컴포넌트가 자주 리렌더링되는 환경에서는 useCallback과 함께 사용하는 것을 고려하세요.
