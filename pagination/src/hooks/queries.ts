import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/api";

export function useGetPosts(page: number) {
  return useQuery({
    queryKey: ["posts", page],
    queryFn: () => getPosts(page),
  });
}
