"use client";

import { useState } from "react";
import { QueryClient,QueryCache, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { handleQueryError } from "./utils/errorHandler";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() =>new QueryClient({
    queryCache: new QueryCache({
      onError: handleQueryError,
    }),
  }));
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
};

export default QueryProvider;
