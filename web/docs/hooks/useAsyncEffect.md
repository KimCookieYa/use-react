---
sidebar_position: 3
---

# useAsyncEffect

`useEffect`에서 비동기 함수를 안전하게 사용할 수 있게 해주는 훅입니다. React의 공식 문서에서는 `useEffect` 콜백에 직접 `async` 함수를 사용하지 않도록 권장하고 있는데, 이 훅을 사용하면 이 문제를 쉽게 해결할 수 있습니다.

## 기능

- `useEffect`에서 비동기 작업을 안전하게 처리
- React 생명주기와 통합된 비동기 효과 관리
- 의존성 배열을 통한 효과 제어

## 사용법

```tsx
import { useAsyncEffect } from '@kimcookieya/use-react';

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useAsyncEffect(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);
  
  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;
  
  return (
    <div>
      <h2>데이터</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

## 매개변수

- **effect** `() => Promise<void>`
  - 실행할 비동기 함수
  
- **deps** `React.DependencyList`
  - 의존성 배열 (기존 useEffect와 동일)

## 사용 사례

- API 데이터 가져오기
- 비동기 스토리지 작업
- 비동기 초기화 작업
- 데이터베이스 쿼리
- 파일 처리 작업

## 구현 예시: 사용자 정보 로딩

```tsx
import { useState } from 'react';
import { useAsyncEffect } from '@kimcookieya/use-react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useAsyncEffect(async () => {
    if (!userId) return;
    
    setLoading(true);
    try {
      // 사용자 정보 가져오기
      const userResponse = await fetch(`/api/users/${userId}`);
      const userData = await userResponse.json();
      
      // 사용자의 최근 활동 가져오기
      const activityResponse = await fetch(`/api/users/${userId}/activity`);
      const activityData = await activityResponse.json();
      
      // 두 데이터 결합
      setUser({
        ...userData,
        recentActivity: activityData
      });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    } finally {
      setLoading(false);
    }
  }, [userId]);
  
  if (loading) return <div>사용자 정보 로딩 중...</div>;
  if (!user) return <div>사용자를 찾을 수 없습니다.</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>이메일: {user.email}</p>
      <h3>최근 활동</h3>
      <ul>
        {user.recentActivity.map(activity => (
          <li key={activity.id}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 주의사항

- 클린업 함수(return)를 사용하는 경우, 별도로 처리해야 합니다.
- 비동기 작업이 컴포넌트 언마운트 후에 완료될 경우 상태 업데이트로 인한 경고가 발생할 수 있습니다.
- 의존성 배열을 올바르게 관리하지 않으면 무한 루프에 빠질 수 있습니다.
