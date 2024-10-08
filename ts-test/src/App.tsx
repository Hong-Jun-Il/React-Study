import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pagination from "./components/Pagination";
import Layout from "./components/layout";
import SuspenseTest from "./components/SuspenseTest";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/pagination",
          element: <Pagination />,
        },
        {
          path: "/suspensetest",
          element: <SuspenseTest />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
