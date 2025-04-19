import QueryCache from "./QueryCache";

export interface QueryClientOptions<T = any> {
  queries?: {
    staleTime?: number;
    gcTime?: number;
  }
}

export type QueryKey = Array<string | number | boolean | null | object>;

export interface QueryOptions<T = any> {
  queryKey: QueryKey;
  queryHash?: string;
  queryFn: () => Promise<T>;
  staleTime?: number;
  gcTime?: number;
}

export interface QueryClientConfig<T = any> {
  cache?: QueryCache;
  defaultClientOptions: QueryClientOptions<T>;
}

export interface QueryConfig<T = any> {
  cache: QueryCache<T>;
  queryKey: QueryKey;
  queryHash: string;
  options: QueryOptions<T>;
  defaultClientOptions: QueryClientOptions<T>;
}

export interface QueryState<T = any> {
  data: T | undefined;
  error: unknown;
  status: "pending" | "success" | "error";
  isFetching: boolean;
  lastUpdated?: number;
}