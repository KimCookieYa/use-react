import QueryCache from "./QueryCache";
import QueryObserver from "./QueryObserver";
import { QueryConfig, QueryKey, QueryOptions, QueryState } from "./types";

class Query<T = any> {
  cache: QueryCache<T>;
  queryKey: QueryKey;
  queryHash: string;
  options: QueryOptions<T>;
  observers: QueryObserver[];
  state: QueryState<T>;
  promise: Promise<T> | null = null;
  gcTimeout: NodeJS.Timeout | null = null;

  constructor(config: QueryConfig<T>) {
    this.observers = [];
    this.cache = config.cache;
    this.queryHash = config.queryHash;
    this.queryKey = config.queryKey;
    this.options = {
      ...config.defaultClientOptions?.queries,
      ...config.options
    };
    this.state = {
      data: undefined,
      error: undefined,
      status: "pending",
      isFetching: false,
      lastUpdated: undefined
    };

    // Query 객체 생성 시점에 QueryCache에게 gc를 요청합니다.
    this.scheduleGcTimeout();
  }

  scheduleGcTimeout = () => {
    const gcTime = this.options.gcTime || 1000 * 60 * 5; // 기본값 5분

    this.gcTimeout = setTimeout(() => {
      this.cache.remove(this);
    }, gcTime);
  };

  clearGcTimeout = () => {
    if (this.gcTimeout) {
      clearTimeout(this.gcTimeout);
      this.gcTimeout = null;
    }
  };

  subscribe = (observer: QueryObserver) => {
    this.observers.push(observer);

    // 구독이 발생할 때 gc 요청을 해제합니다.
    this.clearGcTimeout();

    const unsubscribe = () => {
      this.observers = this.observers.filter((d) => {
        return d !== observer;
      });

      // 구독이 해제되는 시점에 구독 리스트의 길이가 0 이라면, QueryCache에게 gc를 다시 요청합니다.
      if (!this.observers.length) {
        this.scheduleGcTimeout();
      }
    };

    return unsubscribe;
  };

  setState = (updater: (state: QueryState<T>) => QueryState<T>) => {
    this.state = updater(this.state);

    this.observers.forEach((observer) => {
      // 상태가 변경될 때, 구독자들에게 상태 변경 이벤트를 발행합니다.
      observer.notify();
    });
  };

  fetch = () => {
    // promise 객체를 멤버 변수로 활용하여, 불필요한 요청을 방지합니다.
    if (!this.promise) {
      this.promise = (async () => {
        this.setState((old) => ({ ...old, isFetching: true, error: undefined }));

        try {
          if (!this.options.queryFn) {
            throw new Error(`Missing queryFn for query with hash: '${this.queryHash}'`);
          }

          const data = await this.options.queryFn();

          this.setState((old) => ({ ...old, status: "success", data, lastUpdated: Date.now() }));
          
          return data;
        } catch (error: unknown) {
          this.setState((old) => ({ ...old, status: "error", error }));
          throw error;
        } finally {
          this.setState((old) => ({ ...old, isFetching: false }));
          this.promise = null;
        }
      })();
    }

    return this.promise;
  };
}

export default Query;