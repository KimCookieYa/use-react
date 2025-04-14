import Query from "./Query";
import QueryCache from "./QueryCache";

export interface QueryClientOptions<T = any> {
  queries: Query<T>[];
  defaultOptions: QueryOptions<T>;
}

export interface QueryOptions<T = any> {
  queryKey: QueryKey;
  queryHash: string;
  queryFn: () => Promise<T>;
  staleTime: number;
  gcTime: number;
}

export interface QueryClientConfig<T = any> {
  cache?: QueryCache;
  defaultOptions: QueryClientOptions<T>;
}

export interface QueryConfig<T = any> {
  cache: QueryCache;
  queryKey: QueryKey;
  queryHash: string;
  options: QueryOptions<T>;
  defaultOptions: QueryClientOptions<T>;
}

export type QueryKey = string;

export interface QueryState<T = any> {
  data: T | undefined;
  error: unknown;
  status: "pending" | "success" | "error";
  isFetching: boolean;
  lastUpdated?: number;
}