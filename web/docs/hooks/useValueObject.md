---
sidebar_position: 9
---

# useValueObject

값 객체 패턴을 React 상태와 결합한 훅입니다. 상태값과 상태 업데이트 함수를 항상 함께 관리하여 재사용성과 일관성을 높입니다.

## 기능

- 값과 세터 함수를 단일 객체로 캡슐화
- `useMemo`를 통한 불필요한 렌더링 방지
- 값 객체 패턴의 간편한 구현

## 사용법

```tsx
import { useValueObject } from '@kimcookieya/use-react';

function Counter() {
  const counter = useValueObject(0);
  
  const increment = () => {
    counter.setValue(counter.value + 1);
  };
  
  return (
    <div>
      <p>카운트: {counter.value}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}
```

## 매개변수

- **initialValue** `T`
  - 초기 상태값 (어떤 타입이든 가능)

## 반환값

- **valueObject** `{ value: T, setValue: React.Dispatch<React.SetStateAction<T>> }`
  - **value** `T`
    - 현재 상태값
  - **setValue** `React.Dispatch<React.SetStateAction<T>>`
    - 상태를 업데이트하는 함수 (`useState`의 세터와 동일)

## 사용 사례

- 폼 상태 관리
- 관련된 상태값 그룹화
- 컴포넌트 간 상태 전달
- 커스텀 훅의 반환값으로 사용
- 도메인 모델 구현

## 구현 예시: 폼 필드

```tsx
import { useValueObject } from '@kimcookieya/use-react';

// 폼 필드 컴포넌트
function FormField({ label, field, type = 'text', required = false }) {
  return (
    <div className="form-field">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        value={field.value}
        onChange={(e) => field.setValue(e.target.value)}
        required={required}
      />
    </div>
  );
}

// 사용 예시
function ContactForm() {
  const nameField = useValueObject('');
  const emailField = useValueObject('');
  const messageField = useValueObject('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 폼 데이터 전송
    submitForm({
      name: nameField.value,
      email: emailField.value,
      message: messageField.value,
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <FormField 
        label="이름" 
        field={nameField} 
        required 
      />
      <FormField 
        label="이메일" 
        field={emailField} 
        type="email" 
        required 
      />
      <FormField 
        label="메시지" 
        field={messageField} 
      />
      <button type="submit">전송</button>
    </form>
  );
}
```

## 장점

- **일관성**: 값과 세터 함수가 항상 함께 전달되어 일관된 API를 제공합니다.
- **재사용성**: 같은 타입의 상태를 여러 곳에서 쉽게 재사용할 수 있습니다.
- **간결성**: props로 전달할 때 구조가 간결해집니다.
- **타입 안전성**: TypeScript와 함께 사용하면 타입 안전성이 보장됩니다.

## 주의사항

- 값이 변경될 때마다 새로운 객체가 생성되므로, 깊은 비교를 사용하는 컴포넌트에서 주의가 필요합니다.
- 복잡한 상태 로직에는 useReducer와 결합하는 것을 고려하세요.
- 객체를 초기값으로 사용할 때는 일반적인 useState와 마찬가지로 불변성을 유지해야 합니다.
