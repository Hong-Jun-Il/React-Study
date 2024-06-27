import React from 'react';
import styled from 'styled-components';

const MyPage = () => {

    return (
        <StyledMypage>
            구현해야할 마이페이지입니다.
        </StyledMypage>
    );
};

const StyledMypage = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default MyPage;