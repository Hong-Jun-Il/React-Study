import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './components/Login';
import ReducerSample from './components/ReducerSample';

function App() {

  return (
    <StyledRoot>
      <ReducerSample />
    </StyledRoot>
  )
}

const StyledRoot = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
