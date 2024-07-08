import React from 'react';
import styled from 'styled-components';
import { useInput } from '../../hooks/useInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLoginDispatch } from '../../contexts/LoginContext';

const Login = () => {
    const [email, onChangeEmail, setEmail] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    const navigate = useNavigate();
    const dispatch = useLoginDispatch();

    const onLogin = async() =>{
        const submitObject = {
            email,
            password: pw
        }

        try{
            const response = await axios.post("http://localhost:8123/login", submitObject, {
                withCredentials: true 
            });

            alert(response.data.message);

            dispatch({
                type: "LOGIN",
                currentUser: response.data
            })
            navigate("/");
        }catch(e){
            if(e.response.status === 401){
                alert("비밀번호가 맞지 않습니다.");
                return;
            }
            else{
                console.log(e);
            }
        }
    }

    return (
        <StyledLogin>
            <div className="input-wrapper">
                <h3>이메일: </h3>
                <input type="text" value={email} onChange={onChangeEmail} />
            </div>
            <div className="input-wrapper">
                <h3>비밀번호: </h3>
                <input type="password" value={pw} onChange={onChangePw} />
            </div>
            <button onClick={onLogin}>로그인</button>
            <p onClick={()=>navigate("/signup")}>회원가입하기</p>
        </StyledLogin>
    );
};

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    width: 500px;
    height: 400px;
    background: #5789c4;

    .input-wrapper{
        width: 90%;
        align-self: center;
        margin-top: 30px;

        h3{
            font-size: 3rem;
            font-weight: 500;
            color: #eaece0;
            margin-left: 2px;
        }

        input{
            width: 100%;
            height: 4rem;
            border-radius: 8px;
            font-size: 2rem;
            padding: 1.5rem 0 1.5rem 1rem;
        }
    }

    button{
        width: 90%;
        align-self: center;
        font-size: 2.5rem;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 5rem;
    }

    p{
        align-self: flex-end;
        font-size: 2rem;
        margin-top: 15px;
        margin-right: 25px;
        cursor: pointer;
    }
`;

export default Login;