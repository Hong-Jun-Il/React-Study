import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getTodosIds } from "./api";

export function useTodosId() {
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds,
        // refetchOnWindowFocus: false
    })
}

export function useTodos(ids: (number | undefined)[] | undefined) {
    return useQueries({
        queries: (ids ?? []).map((id) => {
            return {
                queryKey: ["todo", { id }],
                queryFn: () => getTodo(id!)
            }
        })
    })
}