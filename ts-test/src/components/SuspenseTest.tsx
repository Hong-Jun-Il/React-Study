import { useGetUsers } from "@/hooks/queries";
import style from "./layout.module.scss";
import { Suspense } from "react";

export default function SuspenseTest() {
  const { data } = useGetUsers();
  console.log(data);
  return (
    <ul>
      {data?.map((user: any) => (
        <Suspense key={user.id} fallback={<div>로딩중....</div>}>
          <li key={user.id}>{user.name}</li>
        </Suspense>
      ))}
    </ul>
  );
}
