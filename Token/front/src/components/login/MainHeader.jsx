import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = () => {
    return (
        <Header>
            <Link to="/">Home</Link>
            <Link to="/about">My Page</Link>
        </Header>
    );
};

const Header = styled.header`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export default MainHeader;