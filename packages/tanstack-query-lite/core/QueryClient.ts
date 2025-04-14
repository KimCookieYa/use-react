import QueryCache from "./QueryCache";
import { QueryClientConfig, QueryClientOptions, QueryOptions } from "./types";
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

  // `options`가 전달되는 경우 `defaultOptions`와 병합하는 과정을 진행
  createQueryOptions = (options: QueryOptions<T>) => {
    const mergedQueryOptions = {
      ...baseQueryOptions,
      ...this.defaultClientOptions?.queries,
      ...options
    };

    const defaultedQueryOptions = {
      ...mergedQueryOptions,
      queryHash: mergedQueryOptions.queryHash || hashKey(mergedQueryOptions.queryKey)
    };

    return defaultedQueryOptions;
  };

  getQueryCache = () => {
    return this.cache;
  };
}

export default QueryClient;
