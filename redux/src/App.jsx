import styled from "styled-components";
import { useSelector } from 'react-redux';

function App() {
  const todos = useSelector
  return (
    <RootWrapper>
      
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
