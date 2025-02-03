import { useCallback, useEffect, useRef, useState } from 'react';

interface IUseFetchState<T> {
  data: T | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
}

interface IUseFetchAction {
  refetch: () => void;
}

interface IUseFetchProps<T> {
  fetchUrl: string;
  initialData?: T | null;
  deps?: unknown[];
  enabled?: boolean;
  successFn?: (data: T) => void | Promise<void>;
  errorFn?: (error: Error) => void | Promise<void>;
  refetchOnWindowFocus?: boolean;
}

export default function useFetchUrl<T = unknown>({
  fetchUrl: url,
  initialData = null,
  deps = [],
  enabled = true,
  successFn,
  errorFn,
  refetchOnWindowFocus = false,
}: IUseFetchProps<T>): IUseFetchState<T> & IUseFetchAction {
  // 진행 중인 요청의 취소 여부를 관리할 플래그 ref
  const cancelFlagRef = useRef<{ canceled: boolean } | null>(null);

  const [state, setState] = useState<IUseFetchState<T>>({
    data: initialData,
    isLoading: false,
    isSuccess: false,
    isError: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    // 새로운 요청을 시작하기 전에 이전 요청이 있다면 취소 처리
    if (cancelFlagRef.current) {
      cancelFlagRef.current.canceled = true;
    }
    // 현재 요청에 대한 취소 플래그 생성
    const cancelFlag = { canceled: false };
    cancelFlagRef.current = cancelFlag;

    setState((prev) => ({ ...prev, isLoading: true, isError: false }));

    try {
      const response = await fetch(url);

      // 요청 도중에 취소된 경우 결과를 무시합니다.
      if (cancelFlag.canceled) return;

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setState({
        data,
        isLoading: false,
        isSuccess: true,
        isError: false,
        error: null,
      });

      if (successFn) {
        successFn(data);
      }
    } catch (error) {
      if (cancelFlag.canceled) return;

      const err = error instanceof Error ? error : new Error(String(error));
      setState({
        data: initialData,
        isLoading: false,
        isSuccess: false,
        isError: true,
        error: err,
      });

      if (errorFn) {
        errorFn(err);
      }
    }
  }, [initialData]);

  useEffect(() => {
    if (!enabled) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        isSuccess: false,
        isError: false,
        error: null,
      }));
      return;
    }

    fetchData();

    return () => {
      if (cancelFlagRef.current) {
        cancelFlagRef.current.canceled = true;
      }
    };
  }, [enabled, fetchData, ...deps]);

  useEffect(() => {
    if (refetchOnWindowFocus) {
      const onFocus = () => {
        if (enabled) {
          fetchData();
        }
      };

      window.addEventListener('focus', onFocus);

      return () => {
        window.removeEventListener('focus', onFocus);
      };
    }
  }, [enabled, fetchData, refetchOnWindowFocus]);

  return {
    ...state,

    refetch() {
      if (enabled) {
        fetchData();
      }
    },
  };
}
