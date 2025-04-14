import { useCallback, useState, useSyncExternalStore } from 'react';
import { QueryObserver, QueryOptions } from '../core';
import {useQueryClient} from './useQueryClient';

const useQuery = <T = any>(options: QueryOptions<T>) => {
  const queryClient = useQueryClient();
  const [queryObserver] = useState(() => new QueryObserver<T>(queryClient, options));

  useSyncExternalStore(
    useCallback((onStoreChange) => {
      // Query 객체를 생성하고, Query 객체의 상태가 변경될 때 onStoreChange 함수를 호출한다.
      const unsubscribe = queryObserver.subscribe(onStoreChange);

      // 컴포넌트가 언마운트되거나 의존성이 변경될 때 구독을 정리(cleanup)하기 위한 함수이다.
      return unsubscribe;
    }, []),
    // onStoreChange 함수가 호출될 때 Object.is로 이전 값과 최신 값을 비교하여, 다시 렌더링을 발생시킨다.
    () => queryObserver.getResult()
  );

  return queryObserver.getResult();
};

export { useQuery };
