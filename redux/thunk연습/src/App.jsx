import styled from "styled-components";
import Users from "./components/Users";
import Todos from "./components/Todos";

function App() {
  return (
    <RootWrapper>
      <Users />
      <Todos />
    </RootWrapper>
  );
}

const RootWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
`;

export default App;
