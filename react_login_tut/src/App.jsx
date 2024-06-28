import styled from "styled-components";
import Register from "./components/Register";

function App() {
  return (
    <Main>
      <Register />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
