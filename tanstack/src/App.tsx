import styled from "styled-components"
import TanstackProjects from "./components/TanstackProjects";

function App() {
  
  return (
    <StyledRoot>
      <TanstackProjects />
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
