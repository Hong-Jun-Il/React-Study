import { Outlet } from "react-router-dom";
import RQProvider from "./RQProvider";
import style from "./layout.module.scss";

export default function Layout() {
  return (
    <RQProvider>
      <main className={style.main}>
        <Outlet />
      </main>
    </RQProvider>
  );
}
