import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingWrapper>
            로딩중...
        </LoadingWrapper>
    );
};

const LoadingWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
`;

export default Loading;