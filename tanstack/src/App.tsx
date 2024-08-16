import styled from "styled-components"
import TanstackProjects from "./components/TanstackProjects";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <StyledRoot>
      <Routes>
        <Route path = "/project" element={<TanstackProjects />} />
      </Routes>
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
