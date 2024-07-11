import styled, { css } from "styled-components";
import Nav from "./components/Nav";
import CartContainer from "./components/CartContainer";

function App() {
  
  return (
    <RootWrapper>
      <Nav />
      <CartContainer />
    </RootWrapper>
  );
}

const RootWrapper = styled.main`
  
`;

export default App;
