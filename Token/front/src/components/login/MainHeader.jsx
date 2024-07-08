import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = () => {
    return (
        <Header>
            <Link to="/">Home</Link>
            <Link to="/mypage">My Page</Link>
        </Header>
    );
};

const Header = styled.header`
    width: 100%;
    height: 7rem;
    position: absolute;
    top: 0; 
    left: 0;
    display: flex;
    justify-content: space-around;
    background-color: #57E7C0;
    color: #072b21;
`;

export default MainHeader;