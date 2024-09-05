import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/api";

type ItemType = {
  id: number;
  name: string;
};

type ItemsResponseType<T> = {
  message: string;
  items: T[];
  totalPages: number;
};

export function useGetItems(page: number) {
  return useQuery({
    queryKey: ["items", page],
    queryFn: async (): Promise<ItemsResponseType<ItemType>> => {
      try {
        const response = await axiosInstance.get<ItemsResponseType<ItemType>>(
          "/getitems",
          {
            params: {
              page,
              limit: 5,
            },
          }
        );

        return response.data;
      } catch (error: unknown) {
        console.log(error);
        throw error;
      }
    },
    placeholderData: keepPreviousData,
  });
}
