import { useContext } from 'react';
import { QueryClient } from '../core';
import { QueryClientContext } from './QueryClientProvider';

/**
 * QueryClient 인스턴스에 접근하기 위한 훅
 * QueryClientProvider로 제공된 QueryClient 인스턴스를 반환합니다
 */
function useQueryClient<T = unknown>(): QueryClient<T> {
  const client = useContext(QueryClientContext);

  if (!client) {
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  }

  return client as QueryClient<T>;
}

export { useQueryClient };