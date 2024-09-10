import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpProvider } from "./pages/SignUp/SignUpProvider";
import { Button } from "./components/ui/button";

const router = createBrowserRouter([
  {
    
  }
])

function App() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <Routes>
        <Route path="/signup" element={<SignUpProvider />} />
      </Routes>
    </main>
  );
}

export default App;
