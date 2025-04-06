---
sidebar_position: 8
---

# useFetchUrl

URL로부터 데이터를 가져오는 훅으로, `useFetch`와 유사하지만 URL을 직접 매개변수로 받아 사용이 더 간편합니다. 로딩 상태 관리, 자동 JSON 파싱, 오류 처리 등의 기능을 제공합니다.

## 기능

- URL을 직접 받아 데이터 페칭
- 로딩, 성공, 오류 상태 관리
- 자동 JSON 파싱
- 요청 취소 메커니즘 (경쟁 상태 방지)
- 의존성 배열에 따른 자동 재요청
- 창 포커스 시 자동 재요청 옵션

## 사용법

```tsx
import { useFetchUrl } from '@kimcookieya/use-react';

function PostDetail({ postId }) {
  const { data, isLoading, isError, error } = useFetchUrl({
    fetchUrl: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    deps: [postId],
  });
  
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러: {error?.message}</div>;
  if (!data) return <div>포스트를 찾을 수 없습니다.</div>;
  
  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </article>
  );
}
```

## 매개변수

- **options** `IUseFetchProps<T>`
  - **fetchUrl** `string`
    - 데이터를 가져올 URL
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

- REST API 데이터 조회
- JSON 데이터 소스에서 정보 가져오기
- 검색 결과 표시
- 목록 페이지네이션
- 외부 API 통합

## 구현 예시: 검색 기능

```tsx
import { useState } from 'react';
import { useFetchUrl } from '@kimcookieya/use-react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data, isLoading, isError } = useFetchUrl({
    fetchUrl: `https://api.example.com/search?q=${encodeURIComponent(searchTerm)}`,
    deps: [searchTerm],
    enabled: Boolean(searchTerm),
    successFn: (data) => {
      console.log(`${data.length}개의 검색 결과를 찾았습니다.`);
    },
  });
  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };
  
  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit">검색</button>
      </form>
      
      {isLoading && <div className="loading">검색 중...</div>}
      {isError && <div className="error">검색 중 오류가 발생했습니다.</div>}
      
      {data && data.length === 0 && <p>검색 결과가 없습니다.</p>}
      
      <ul className="search-results">
        {data?.map((item) => (
          <li key={item.id} className="search-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## useFetch와의 차이점

`useFetchUrl`은 `useFetch`의 특수한 버전으로, 다음과 같은 특징이 있습니다:

1. URL 문자열을 직접 받아 `fetch(url)`을 수행합니다.
2. 응답을 자동으로 JSON으로 파싱합니다.
3. HTTP 오류 상태를 자동으로 감지하고 예외를 발생시킵니다.

간단한 REST API 요청에는 `useFetchUrl`이 더 편리하지만, 복잡한 요청 로직이나 커스텀 데이터 변환이 필요한 경우 `useFetch`가 더 적합합니다.

## 주의사항

- URL이 포함하는 파라미터는 적절히 인코딩되어야 합니다 (`encodeURIComponent` 사용).
- 응답이 JSON 형식이 아닌 경우 오류가 발생합니다.
- 인증이 필요한 API 요청의 경우 추가 옵션을 지원하지 않으므로 `useFetch`를 사용하는 것이 좋습니다.
