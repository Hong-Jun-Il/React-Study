import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isLoginSelector } from '../Recoil/TokenAtom';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    const navigate = useNavigate();
    useEffect(()=>{
        if(isLogin){
            return;
        }
        else{
            alert("로그인하세여");
            navigate("/loginpage");
            return;
        }
    }, [])

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