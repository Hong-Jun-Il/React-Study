import React from 'react';
import styled from 'styled-components';
import { useInput } from '../../hooks/useInput';
import axios from '../../api/axios';

const Login = () => {
    const [email, onChangeEmail, setEmail] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");

    const onLogin = async() =>{
        const submitObject = {
            email,
            pw
        }

        try{
            const response = await axios.post("http://localhost:8123/login", submitObject);
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <StyledLogin>
            <div>아이디:</div>
            <input type="text" value={email} onChange={onChangeEmail} />
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
        font-size: 1.5rem;
    }
`;

export default Login;