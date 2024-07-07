import React, { useEffect } from 'react';
import { baseURL } from '../../api/api';
import { Link, Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import styled from 'styled-components';

const MainPage = () => {
    
    return (
        <Main>
            <MainHeader />
           <Outlet />
        </Main>
    );
};

const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
`;

export default MainPage;