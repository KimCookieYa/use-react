---
sidebar_position: 7
---

# useFetch

데이터 페칭을 간소화하는 훅으로, 로딩 상태, 성공/오류 처리, 자동 취소, 재시도 등의 기능을 제공합니다. React Query나 SWR과 유사한 패턴으로 데이터 가져오기를 처리할 수 있습니다.

## 기능

- 로딩, 성공, 오류 상태 관리
- 데이터 페칭 자동 취소 (경쟁 상태 방지)
- 의존성 배열에 따른 자동 재요청
- 창 포커스 시 자동 재요청 옵션
- 성공/오류 콜백 함수 지원
- 수동 재요청 기능

## 사용법

```tsx
import { useFetch } from '@kimcookieya/use-react';

function UserProfile({ userId }) {
  const { data, isLoading, isError, error, refetch } = useFetch({
    fetchFn: async () => {
      const response = await fetch(`/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    },
    deps: [userId],
    refetchOnWindowFocus: true,
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러: {error?.message}</div>;
  if (!data) return <div>사용자 정보가 없습니다.</div>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>이메일: {data.email}</p>
      <button onClick={refetch}>새로고침</button>
    </div>
  );
}
```

## 매개변수

- **options** `IUseFetchProps<T>`
  - **fetchFn** `() => Promise<T>`
    - 데이터를 가져오는 비동기 함수
  - **initialData** `T | null` (선택적, 기본값: `null`)
    - 초기 데이터 상태
  - **deps** `unknown[]` (선택적, 기본값: `[]`)
    - 의존성 배열, 값이 변경되면 자동으로 다시 요청
  - **enabled** `boolean` (선택적, 기본값: `true`)
    - 페칭 활성화 여부
  - **successFn** `(data: T) => void | Promise<void>` (선택적)
    - 요청 성공 시 실행될 콜백 함수
  - **errorFn** `(error: Error) => void | Promise<void>` (선택적)
    - 요청 실패 시 실행될 콜백 함수
  - **refetchOnWindowFocus** `boolean` (선택적, 기본값: `false`)
    - 창이 다시 포커스될 때 자동으로 데이터를 다시 가져올지 여부

## 반환값

- **data** `T | null`
  - 요청으로 받은 데이터 또는 초기 데이터
- **isLoading** `boolean`
  - 요청 진행 중 여부
- **isSuccess** `boolean`
  - 요청 성공 여부
- **isError** `boolean`
  - 요청 실패 여부
- **error** `Error | null`
  - 요청 오류 객체
- **refetch** `() => void`
  - 수동으로 데이터를 다시 가져오는 함수

## 사용 사례

- API 데이터 조회
- 폼 제출 후 데이터 갱신
- 무한 스크롤/페이지네이션
- 필터 변경 시 데이터 재조회
- 백그라운드 데이터 동기화

## 구현 예시: 데이터 목록 필터링

```tsx
import { useState } from 'react';
import { useFetch } from '@kimcookieya/use-react';

function ProductList() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  
  const { data, isLoading, isError, refetch } = useFetch({
    fetchFn: async () => {
      const response = await fetch(
        `/api/products?category=${category}&sort=${sortBy}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    },
    deps: [category, sortBy],
    successFn: (data) => {
      console.log(`총 ${data.length}개의 상품을 로드했습니다.`);
    },
    errorFn: (error) => {
      console.error('상품 로드 중 오류 발생:', error);
    },
  });
  
  return (
    <div className="product-list">
      <div className="filters">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">모든 카테고리</option>
          <option value="electronics">전자제품</option>
          <option value="clothing">의류</option>
          <option value="books">도서</option>
        </select>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="newest">최신순</option>
          <option value="price_asc">가격 낮은순</option>
          <option value="price_desc">가격 높은순</option>
        </select>
        
        <button onClick={refetch}>새로고침</button>
      </div>
      
      {isLoading && <div className="loading">로딩 중...</div>}
      {isError && <div className="error">상품을 불러오는데 실패했습니다.</div>}
      
      <div className="products">
        {data?.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 주의사항

- 요청 취소 메커니즘은 렌더링 간의 경쟁 상태를 방지하지만, API 자체의 중단을 지원하지 않습니다.
- 복잡한 캐싱, 스로틀링, 중복 요청 제거가 필요한 경우 React Query나 SWR 같은 전용 라이브러리를 고려하세요.
- 의존성 배열에는 객체나 함수보다 원시값을 사용하는 것이 좋습니다.
