import { keepPreviousData, useInfiniteQuery, useQueries, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct, getProducts, getProjects, getTodo, getTodoIds } from "../api/api";
import { ProductType } from "../types/ProductType";

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

export function useGetProjects(page: number) {
    return useQuery({
        queryKey: ["projects", page],
        queryFn: () => getProjects(page),
        placeholderData: keepPreviousData
    })
}

export function useProducts() {
    return useInfiniteQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        initialPageParam: 1,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            // console.log("lastPage: ", lastPage, "lastPageParam: ", lastPageParam);
            if (lastPage.length === 0) {
                return undefined;
            }
            return lastPageParam + 1;
        },
        getPreviousPageParam: (_, __, firstPageParam) => {
            if (firstPageParam <= 1) {
                return undefined;
            }
            return firstPageParam - 1;
        }
    })
}

export function useProduct(id: number | null) {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id!),
        enabled: !!id,
        placeholderData: () => {
            const cachedProducts = (
                queryClient.getQueryData(["products"]) as {
                    pages: ProductType[] | undefined;
                }
            )?.pages?.flat(2);
            
            if (cachedProducts) {
                return cachedProducts.find(item => item.id === id);
            }
        }
    })
}