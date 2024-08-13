import { useQuery } from "@tanstack/react-query";
import { getTodosIds } from "./api";

export function useTodosId(){
    return useQuery({
        queryKey: ["todos"],
        queryFn: getTodosIds,
        // refetchOnWindowFocus: false
    })
}