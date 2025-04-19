import QueryCache from "./QueryCache";
import { QueryClientConfig, QueryClientOptions, QueryKey, QueryOptions } from "./types";
import { hashKey } from "./utils";

const baseQueryOptions = {
  staleTime: 1000 * 60 * 5, // 5분
  gcTime: 1000 * 60 * 5 // 5분
};

class QueryClient<T = any> {
  cache: QueryCache<T>;
  defaultClientOptions: QueryClientOptions<T>;

  constructor(config: QueryClientConfig) {
    this.cache = config.cache || new QueryCache();
    this.defaultClientOptions = config.defaultClientOptions;
  }

  /**
   * QueryOptions에 기본값을 적용하고 queryHash가 없으면 생성합니다.
   */
  createQueryOptions = (options: QueryOptions<T>) => {
    // 기존 옵션과 기본 옵션을 병합
    const mergedQueryOptions = {
      ...baseQueryOptions,
      ...this.defaultClientOptions?.queries,
      ...options
    };

    // queryHash가 없는 경우에만 생성
    const defaultedQueryOptions = {
      ...mergedQueryOptions,
      queryHash: mergedQueryOptions.queryHash || hashKey(mergedQueryOptions.queryKey)
    };

    return defaultedQueryOptions;
  };

  /**
   * QueryCache 인스턴스를 반환합니다.
   */
  getQueryCache = () => {
    return this.cache;
  };

  invalidateQueries = ({queryKey}:{queryKey?: QueryKey}) => {
    if (queryKey) {
      const query = this.cache.get(hashKey(queryKey));
      if (query) {
        query.state.status = "pending";
      }
    } else {
      this.cache.queries.forEach((query) => {
        query.state.status = "pending";
      });
    }
  };
}

export default QueryClient;
