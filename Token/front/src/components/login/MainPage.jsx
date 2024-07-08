import React, { useEffect, useState } from 'react';
import { baseURL } from '../../api/api';
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';
import styled from 'styled-components';
import { useLoginDispatch, useLoginState } from '../../contexts/LoginContext';
import Loading from './Loading';

const MainPage = () => {
    const {currentUser} = useLoginState();

    console.log(currentUser, "ASdsaada");

    return (
        <Main>
            <MainHeader />
            <Outlet />
        </Main>
    );
};

const Main = styled.section`
    width: 80%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #09F0B6;
`;

export default MainPage;