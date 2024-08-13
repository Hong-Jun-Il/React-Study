import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { decrease, increase, reset } from './features/counterSlice';

const App = () => {

  return (
    <RootWrapper>
      
    </RootWrapper>
  );
};

const RootWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: aliceblue;
    font-size: 5rem;
  
`;

export default App;
