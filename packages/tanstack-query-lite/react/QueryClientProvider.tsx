import { createContext, ReactNode } from "react";
import { QueryClient } from "../core";

export const QueryClientContext = createContext<QueryClient | undefined>(undefined);

export const QueryClientProvider = ({ client, children }: { client: QueryClient, children: ReactNode }) => {
  return <QueryClientContext.Provider value={client}>{children}</QueryClientContext.Provider>;
};
