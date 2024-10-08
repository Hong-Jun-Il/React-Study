import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./components/Posts";
import RootLayout from "./components/RootLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/posts",
          element: <Posts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
