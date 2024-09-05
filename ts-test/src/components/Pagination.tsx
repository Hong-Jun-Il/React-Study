import { useNavigate } from "react-router-dom";
import { useGetItems } from "../hooks/queries";
import { useState } from "react";

export default function Pagination() {
  const navigate = useNavigate();
  const pageParams: number =
    Number(new URLSearchParams(location.search).get("page")) || 1;
  //   console.log(pageParams)
  const [currentPage, setCurrentPage] = useState<number>(pageParams ?? 1);
  const testBtns: number[] = [1, 2, 3, 4, 5];
  const { data, isPlaceholderData } = useGetItems(currentPage);

//   fisrt페이지의 26 / 5 = 4 
// const startPage: number = Math.floor((currentPage - 1) / btnsPerGroup) * btnsPerGroup + 1;
  const first: number = (currentPage - 1) * 5 + 1;
  const last: number = Math.min((first + 5), data?.totalPages!);

  const btnsArray = Array.from({ length: last - first }, (_, i) => i);
  console.log(first, last);

  const handlePage = (page: number) => {
    if (page <= 0 || page > data?.totalPages!) {
      return;
    }

    setCurrentPage(page);
    navigate(`/pagination?page=${page}`);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full">
      <ul className="flex flex-col">
        {data?.items?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul className="flex border border-red-500 absolute bottom-5">
        <button onClick={() => handlePage(currentPage - 1)}>이전</button>
        {testBtns.map((n: number) => (
          <li key={n} className="cursor-pointer">
            {n}
          </li>
        ))}
        <button
          disabled={isPlaceholderData}
          onClick={() => handlePage(currentPage + 1)}
          className={`${isPlaceholderData ? "text-red-500" : "text-black"}`}
        >
          다음
        </button>
      </ul>
    </section>
  );
}
