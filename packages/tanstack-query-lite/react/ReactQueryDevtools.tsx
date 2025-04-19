import { useReducer, useEffect } from "react";
import { useQueryClient } from "./useQueryClient";

const ReactQueryDevtools = () => {
  const queryClient = useQueryClient();

  // rerender 함수를 호출하면 다시 렌더링이 발생합니다.
  const [, rerender] = useReducer((i) => i + 1, 0);

  useEffect(() => {
    // QueryCache에서 notify 이벤트가 발행되면 rerender 함수를 호출합니다.
    return queryClient.cache.subscribe(rerender);
  }, [queryClient]);

  const queries = queryClient.getQueryCache().getAll();
  const sortedQueries = [...queries].sort((a, b) => (a.queryHash > b.queryHash ? 1 : -1));

  return (
    <div className="fixed bottom-0 w-full overflow-scroll text-white bg-black divide-y-2 divide-gray-800 divide-solid">
      {sortedQueries.map((query) => {
        const { queryKey, queryHash, state, observers, options } = query;
        const { isFetching, status } = state;

        const { staleTime, gcTime } = options;

        return (
          <div key={queryHash} className="p-2">
            {JSON.stringify(queryKey, null, 2)}, {JSON.stringify({ staleTime, gcTime }, null, 2)} -{" "}
            <span className="font-bold">
              {(() => {
                if (isFetching) {
                  return <span className="text-blue-500">fetching</span>;
                }

                if (!observers.length) {
                  return <span className="text-gray-500">inactive</span>;
                }

                if (status === "success") {
                  return <span className="text-green-500">success</span>;
                }

                if (status === "error") {
                  return <span className="text-red-500">error</span>;
                }

                return null;
              })()}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ReactQueryDevtools;