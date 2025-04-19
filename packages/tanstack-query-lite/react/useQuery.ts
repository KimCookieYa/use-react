import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Query, QueryObserver, QueryOptions, QueryState } from '../core';
import { useQueryClient } from './useQueryClient';

export type UseQueryOptions<T = unknown> = Omit<QueryOptions<T>, 'queryHash'>;

export type UseQueryResult<T = unknown> = QueryState<T> & {
  refetch: () => Promise<T> | null;
  isStale: boolean;
};

function useQuery<T = unknown>(options: UseQueryOptions<T>): UseQueryResult<T> {
  // 타입 캐스팅으로 호환성 문제 해결
  const queryClient = useQueryClient<T>();
  const optionsRef = useRef(options);
  
  // 옵션 변경 감지
  useEffect(() => {
    optionsRef.current = options;
  }, [options]);
  
  // Observer 생성 (타입 호환성을 위한 캐스팅)
  const [observer] = useState<QueryObserver<T>>(() => {
    return new QueryObserver(queryClient, options);
  });

  // Observer 옵션 업데이트
  useEffect(() => {
    observer.options = options;
  }, [observer, options]);
  
  // useSyncExternalStore로 상태 관리
  const state = useSyncExternalStore<QueryState<T>>(
    useCallback((onStoreChange) => {
      // Query 객체를 생성하고, Query 객체의 상태가 변경될 때 onStoreChange 함수를 호출
      const unsubscribe = observer.subscribe(onStoreChange);
      return unsubscribe;
    }, [observer]),
    // getSnapshot 함수
    () => observer.getResult() as QueryState<T>
  );
  
  // refetch 함수
  const refetch = useCallback(() => {
    const query = observer.getQuery()
    return query.fetch();
  }, [observer]);
  
  // 현재 시간과 마지막 업데이트 시간을 비교하여 stale 상태 계산
  const lastUpdated = state.lastUpdated || 0;
  const staleTime = options.staleTime || 0;
  const isStale = Date.now() - lastUpdated > staleTime;
  
  return {
    ...state,
    refetch,
    isStale
  };
}

export { useQuery };
