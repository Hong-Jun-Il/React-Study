import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodo, getTodoIds } from "../api/api";

export function useGetTodoIds() {
    return useQuery({
        queryKey: ["todo-ids"],
        queryFn: getTodoIds
    })
}

export function useGetTodos(ids: number[]) {
    return useQueries({
        queries: ids.map((id: number) => {
            return {
                queryKey: ["todos", { id }],
                queryFn: () => getTodo(id)
            }
        })
    })
}