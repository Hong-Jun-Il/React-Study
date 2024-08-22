import { useInfiniteQuery } from "@tanstack/react-query";
import { getItems } from "../api/cartAPi";

export function useGetItems() {
    return useInfiniteQuery({
        queryKey: ["items"],
        queryFn: getItems,
        initialPageParam: 1,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            if (lastPageParam === 14) {
                return undefined;
            }

            return lastPageParam + 1
        }
    })
}