import styled from "styled-components"
// import TanstackProjects from "./components/TanstackProjects";
// import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";

function App() {
  
  return (
    <StyledRoot>
      {/* <Routes>
        <Route path = "/project" element={<TanstackProjects />} />
      </Routes> */}
      <Products />
    </StyledRoot>
  )
}

const StyledRoot = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export default App