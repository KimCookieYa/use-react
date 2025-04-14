import QueryCache from "./QueryCache";
import { QueryClientConfig, QueryClientOptions, QueryOptions } from "./types";
import { hashKey } from "./utils";

class QueryClient<T = any> {
  cache: QueryCache<T>;
  defaultOptions: QueryClientOptions<T>;

  constructor(config: QueryClientConfig) {
    this.cache = config.cache || new QueryCache();
    this.defaultOptions = config.defaultOptions;
  }

  // `options`가 전달되는 경우 `defaultOptions`와 병합하는 과정을 진행
  createDefaultQueryOptions = (options: QueryOptions<T>) => {
    const mergedQueryOptions = {
      ...this.defaultOptions?.queries,
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
