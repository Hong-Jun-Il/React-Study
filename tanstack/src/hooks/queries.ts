import { keepPreviousData, useQueries, useQuery } from "@tanstack/react-query";
import { getProjects, getTodo, getTodoIds } from "../api/api";

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

export function useGetProjects(page: number){
    return useQuery({
        queryKey: ["projects", page],
        queryFn: ()=>getProjects(page),
        placeholderData: keepPreviousData
    })
}