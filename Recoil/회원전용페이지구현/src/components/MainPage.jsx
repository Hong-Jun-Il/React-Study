import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
    const navigate = useNavigate();
    return (
        <StyledMainPage>
            <StyledButton onClick={()=>navigate("/loginpage")}>로그인하기</StyledButton>
            <StyledButton onClick={()=>navigate("/mypage")}>마이페이지</StyledButton>
        </StyledMainPage>
    );
};

const StyledMainPage = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled.button`
    padding: 5rem;
    font-size: 3rem;
    margin: 3rem;
`;

export default MainPage;