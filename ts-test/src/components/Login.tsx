import React, { useState } from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks/useInput';
import Input from './Input';

interface FocusType {
    idFocus: boolean,
    pwFocus: boolean
}

const Login = () => {
    const [id, handleId, setId] = useInput("");
    const [pw, handlePw, setPw] = useInput("");
    const [isFocused, setIsFocused] = useState<FocusType>({
        idFocus: false,
        pwFocus: false
    })

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        console.log({
            id,
            pw
        });
        
        setId("");
        setPw("");
    }

    return (
        <StyledLoginForm onSubmit={onSubmit}>
            <Input value={id} onChange={handleId} isFocus={isFocused.idFocus} placeholderText='아이디를 입력해주세요'
                onFocus={() => setIsFocused(prev => ({
                    ...prev,
                    idFocus: true
                }))}
                onBlur={() => {
                    setIsFocused(prev=>({
                        ...prev,
                        idFocus: false
                    }))
                }} max = {8} />
                <Input value={pw} onChange={handlePw} isFocus={isFocused.pwFocus} placeholderText='비밀번호를 입력해주세요' onFocus={()=>{
                    setIsFocused(prev=>({
                        ...prev,
                        pwFocus: true
                    }))
                }} onBlur={()=>{
                    setIsFocused(prev=>({
                        ...prev,
                        pwFocus: false
                    }))
                }} max = {15} />
                <LoginBtn type='submit'>로그인하기</LoginBtn>
        </StyledLoginForm>
    );
};

const StyledLoginForm = styled.form`
    width: 500px;
    aspect-ratio: 1/1;
    background-color: #69a6db;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LoginBtn = styled.button`
    width: 90%;
    border-radius: 10px;
    background-color: #84dbdb;
    font-size: 2rem;
    padding: 10px 20px;
    white-space: nowrap;
`

export default Login;