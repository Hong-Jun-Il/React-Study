import { Route, Routes } from "react-router-dom";
import Pagination from "./components/Pagination";

function App() {  
  return (
    <Routes>
      <Route path="/pagination" element={<Pagination />} />
    </Routes>
  );
}

export default App;
