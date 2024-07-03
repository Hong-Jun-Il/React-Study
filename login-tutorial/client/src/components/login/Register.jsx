import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components";
import { useInput } from '../../hooks/useInput';

const Register = () => {
    // 닉네임, 아이디, 패스워드
    const [nickname, onChangeNickname] = useInput("");
    const [id, onChangeId] = useInput("");
    const [pw, onChangePw] = useInput("");
    const [matchPw, onChangeMatch] = useInput("");

    const [errorMsg, setErrorMsg] = useState({
        nicknameError: "",
        idError: "",
        pwError: "",
        matchError: ""
    })

    const inputRegexs = {
        // 대소문자 영문자 및 숫자, 유효한 한글 포함 3~15글자
        nicknameReg: /^[a-zA-Z가-힣0-9]{2,15}$/,
        // 첫글자는 알파벳 대소문자, 그 다음은 알파벳 대소문자 및 숫자, 하이픈, 언더스코어 포함 5~23글자
        idReg: /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/,
        // 최소 하나의 대소문자, 숫자, 특수문자 8~24글자
        pwReg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
    }
    const nicknameRef = useRef();
    const idRef = useRef();
    const pwRef = useRef();
    const matchRef = useRef();

    useEffect(()=>{
        if(!inputRegexs.nicknameReg.test(nickname)){
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                nicknameError: "닉네임은 영문자 및 숫자, 유효한 한글 포함 3글자 이상 15글자 이하여야 합니다."
            }));
        } else {
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                nicknameError: ""
            }));
        }
    }, [nickname])

    useEffect(()=>{
        if(!inputRegexs.idReg.test(id)){
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                idError: "아이디는 영문자 및 숫자 포함 5글자 이상 23글자 이하여야 합니다."
            }));
        } else {
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                idError: ""
            }));
        }
    }, [id])
    
    useEffect(()=>{
        if(!inputRegexs.pwReg.test(pw)){
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                pwError: "비밀번호는 최소 하나의 대문자, 숫자, 특수문자를 포함하여 8글자 이상 24글자 이하여야 합니다."
            }));
        } else {
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                pwError: ""
            }));
        }
    }, [pw])

    useEffect(()=>{
        if(matchPw !== pw){
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                matchError: "비밀번호가 맞지 않습니다."
            }));
        } else {
            setErrorMsg((prevErrors) => ({
                ...prevErrors,
                matchError: ""
            }));
        }
    }, [matchPw, pw])

    const onSubmit = async() =>{
        if(errorMsg.nicknameError){
            alert("닉네임을 확인해주세요");
            nicknameRef.current.focus();
            return;
        }

        if(errorMsg.idError){
            alert("아이디를 확인해주세요");
            idRef.current.focus();
            return;
        }

        if(errorMsg.pwError){
            alert("비밀번호를 확인해주세요");
            pwRef.current.focus();
            return;
        }

        if(errorMsg.matchError){
            alert("비밀번호가 맞지 않습니다.");
            matchRef.current.focus();
            return;
        }
        
        const sumbitObject = {
            nickname: nickname,
            id: id,
            pw: pw
        }

        // try{
        //     const response = await axios.post(REGISTER_URL, sumbitObject, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             withCredentials: true
        //         }
        //     });
            
        //     console.log(response?.data);

        // }catch(e){
        //     console.log(e);
        // }
    }

    return (
        <StyledRegister>
            <div className="input-wrapper">
                <h3>nickname:</h3>
                <input type='text' name='nickname' value={nickname} onChange={onChangeNickname} ref={nicknameRef} autoComplete='off' />
                {nickname.length >= 1 && errorMsg.nicknameError && (
                    <p>{errorMsg.nicknameError}</p>
                )}
            </div>

            <div className="input-wrapper">
                <h3>id:</h3>
                <input type='text' name='id' value={id} onChange={onChangeId} ref={idRef} autoComplete='off' />
                {id.length >= 1 && errorMsg.idError && (
                    <p>{errorMsg.idError}</p>
                )}
            </div>

            <div className="input-wrapper">
                <h3>Password:</h3>
                <input type='password' name='pw' value={pw} onChange={onChangePw} ref={pwRef} autoComplete='off' />
                {pw.length >= 1 && errorMsg.pwError && (
                    <p>{errorMsg.pwError}</p>
                )}
            </div>

            <div className="input-wrapper">
                <h3>Confirm Password:</h3>
                <input type='password' name='match' value={matchPw} onChange={onChangeMatch} ref={matchRef} autoComplete='off' />
                {matchPw.length >= 1 && errorMsg.matchError && (
                    <p>{errorMsg.matchError}</p>
                )}
            </div>
            
            <button onClick={onSubmit}>회원가입</button>
        </StyledRegister>
    );
};

const StyledRegister = styled.section`
    width: 500px;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #5789c4;

    .input-wrapper{
        align-self: center;
        width: 90%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 10px;

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

        p{
            font-size: 1.5rem;
            margin-top: 7px;
            margin-left: 2px;
            color: #a32121;
        }
    }
    
    button{
        width: 90%;
        align-self: center;
        font-size: 2.5rem;
        padding: 10px;
        margin: 3rem 0;
        border-radius: 8px;
        cursor: pointer;
    }
`;

export default Register;