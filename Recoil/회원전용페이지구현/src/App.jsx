import styled from "styled-components";
import { useInput } from "./hooks/useInput";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { TokenAtom } from "./Recoil/TokenAtom";

function App() {
  const [id, onChangeId, setId] = useInput("");
  const [pw, onChangePw, setPw] = useInput("");
  const [accessToken, setAccessToken] = useRecoilState(TokenAtom);

  const handleSubmit = async () =>{
    if(id === "" || pw === ""){
      alert("입력해라");
      return;
    }

    try{
      const response = await axios.post("/login", {
        id: id,
        pw: pw
      })

      setAccessToken(response.data.accessToken);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <Main>
      
      <LoginWrapper>
        <div className="wrapper">
          <h4>ID</h4>
          <StyledInput value={id} onChange={onChangeId} />
        </div>

        <div className="wrapper">
          <h4>PW</h4>
          <StyledInput value={pw} onChange={onChangePw} />
        </div>
        <button onClick={handleSubmit}>로그인하기</button>
      </LoginWrapper>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrapper = styled.div`
  border: 2px solid #36343424;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrapper{
    display: flex;
    flex-direction: column;
    margin-top: 4rem;

    h4{
      font-size: 3.5rem;
    }
  }

  button{
    margin-top: 5rem;
    width: 80%;
    height: 45px;
    font-size: 2rem;
  }
`;

const StyledInput = styled.input`
  width: 350px;
  height: 35px;
  border-radius: 5px;
  border: 0.5px solid gray;
`;

export default App;
