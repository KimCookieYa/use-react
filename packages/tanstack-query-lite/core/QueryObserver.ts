import QueryClient from "./QueryClient";
import Query from "./Query";
import { QueryKey, QueryOptions } from "./types";
import { areKeysEqual } from "./utils";

const noop = () => {};

class QueryObserver<T = any> {
  client: QueryClient<T>;
  options: QueryOptions<T>;
  currentQuery: Query<T> | null = null;
  notify = noop;

  constructor(client: QueryClient<T>, options: QueryOptions<T>) {
    this.client = client;
    this.options = options;
  }

  /**
   * 현재 옵션의 QueryKey를 사용하여 Query 객체를 가져옵니다.
   */
  getQuery = () => {
    // options의 queryKey 값을 기반으로 구독되어 있는 Query를 조회합니다.
    const query = this.client.getQueryCache().build(this.client, this.options);
    this.currentQuery = query;
    return query;
  };

  /**
   * QueryKey가 변경되었는지 확인합니다.
   */
  hasQueryKeyChanged = (prevQueryKey: QueryKey, nextQueryKey: QueryKey): boolean => {
    return !areKeysEqual(prevQueryKey, nextQueryKey);
  };

  /**
   * Query 객체에서 관리하고 있는 상태를 조회합니다.
   */
  getResult = () => {
    return this.getQuery().state;
  };

  /**
   * Query 상태 변경을 구독합니다.
   */
  subscribe = (callback: () => void) => {
    // Query 객체의 서버 상태가 변경될 때 호출이 필요한 callback 함수를 notify 멤버 변수로 저장합니다.
    this.notify = callback;

    const query = this.getQuery();

    const { lastUpdated } = query.state;
    const staleTime = this.options.staleTime || 0;

    const needsToFetch = !lastUpdated || Date.now() - lastUpdated > staleTime;

    const unsubscribeQuery = query.subscribe(this);

    if (needsToFetch) {
      query.fetch();
    }

    const unsubscribe = () => {
      unsubscribeQuery();
    };

    return unsubscribe;
  };
}

export default QueryObserver;

