import Query from "./Query";
import QueryClient from "./QueryClient";
import {QueryKey, QueryOptions} from "./types";
import { hashKey } from "./utils";

class QueryCache<T = any> {
  queries: Map<QueryKey, Query<T>>;

  constructor() {
    this.queries = new Map();
  }

  get = (queryHash: string) => {
    return this.queries.get(queryHash);
  };

  build(client: QueryClient<T>, options: QueryOptions<T>) {
    const queryKey = options.queryKey;
    const queryHash = hashKey(queryKey);

    let query = this.get(queryHash);

    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.createDefaultQueryOptions(options),
        defaultOptions: client.defaultOptions
      });

      this.queries.set(query.queryHash, query);
    }

    // 캐싱되어 있는 Query를 반환합니다.
    return query;
  }

  remove = (query: Query<T>) => {
    this.queries.delete(query.queryHash);
  };
}

export default QueryCache;