import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";

const Nav = () => {
    const amount = useSelector(store => store.cart.amount);
    return (
        <StyledNav>
            <h1>Redux Toolkit</h1>
            <span>{amount}개</span>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #684591;
    h1{
        font-size: 4rem;
    }

    span{
        font-size: 3rem;
    }
`;

export default Nav;