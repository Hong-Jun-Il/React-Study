import { useState } from "react";
import { useGetPosts } from "../hooks/queries";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const navigate = useNavigate();
  const pageParam =
    Number(new URLSearchParams(location.search).get("page")) || 1;
  const [page, setPage] = useState<number>(pageParam);
  const { data } = useGetPosts(page);

  const handlePage = (nextPage: number) => {
    setPage(nextPage);
    navigate(`/posts?page=${page}`);
  };

  const btns: number[] = [1, 2, 3, 4, 5];
  return (
    <main>
      {data?.data.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
      {btns.map((btn) => (
        <div key={btn} onClick={() => handlePage(btn)}>
          {btn}
        </div>
      ))}
    </main>
  );
}
