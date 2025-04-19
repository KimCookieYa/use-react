import Query from "./Query";
import QueryClient from "./QueryClient";
import { QueryOptions} from "./types";
import { hashKey } from "./utils";

class QueryCache<T = any> {
  queries: Map<string, Query<T>>;
  listeners: Set<() => void>;

  constructor() {
    this.queries = new Map();
    // 이벤트를 발행할 구독자들을 저장합니다.
    this.listeners = new Set();
  }

  get = (queryHash: string) => {
    return this.queries.get(queryHash);
  };

  getAll = () => {
    return Array.from(this.queries.values());
  };

  /**
   * 주어진 QueryKey와 옵션으로 Query를 조회하거나 새로 생성합니다.
   */
  build(client: QueryClient<T>, options: QueryOptions<T>) {
    const queryKey = options.queryKey;
    const queryHash = options.queryHash || hashKey(queryKey);

    let query = this.get(queryHash);

    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.createQueryOptions(options),
        defaultClientOptions: client.defaultClientOptions
      });

      this.queries.set(query.queryHash, query);
    }

    // 캐싱되어 있는 Query를 반환합니다.
    return query;
  }

  /**
   * Query 객체를 캐시에서 제거합니다.
   */
  remove = (query: Query<T>) => {
    this.queries.delete(query.queryHash);
  };

  // 이벤트를 발행할 구독자를 추가합니다.
  subscribe = (listener: () => void) => {
    this.listeners.add(listener);

    const unsubscribe = () => {
      this.listeners.delete(listener);
    };

    return unsubscribe;
  };

  // 이벤트를 발행합니다.
  notify = () => {
    this.listeners.forEach((callback) => {
      callback();
    });
  };
}

export default QueryCache;