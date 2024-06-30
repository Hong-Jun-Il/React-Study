import React from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks/useInput';

const Login = () => {
    const [id, onChangeId, setId] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");

    const onLogin = () =>{
        const submitObject = {
            id,
            pw
        }

        console.log(submitObject);
    }

    return (
        <StyledLogin>
            <div>아이디:</div>
            <input type="text" value={id} onChange={onChangeId} />
            <div>비밀번호:</div>
            <input type="text" value={pw} onChange={onChangePw} />
            <button onClick={onLogin}>로그인하기</button>
        </StyledLogin>
    );
};

const StyledLogin = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 5rem;

    input{
        width: 200px;
        height: 3rem;
        font-size: 3rem;
    }
`;

export default Login;