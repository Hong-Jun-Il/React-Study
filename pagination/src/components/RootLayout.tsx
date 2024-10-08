import { Outlet } from "react-router-dom";
import RQProvider from "./RQProvider";

export default function RootLayout() {
  return (
    <RQProvider>
      <Outlet />
    </RQProvider>
  );
}
