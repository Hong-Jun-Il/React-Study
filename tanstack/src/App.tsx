import styled from "styled-components"
import Todos from "./components/Todos";

function App() {

  return (
    <StyledRoot>
      <Todos />
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
