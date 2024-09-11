import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SignUpProvider } from "./pages/SignUp/SignUpProvider";
import LandingPage from "./pages/landing/LandingPage";
import { SignInProvider } from "./pages/SignIn/SignInProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/signin",
    element: <SignInProvider />
  },
  {
    path: "/signup",
    element: <SignUpProvider />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
