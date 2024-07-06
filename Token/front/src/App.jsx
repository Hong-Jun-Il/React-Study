import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { UsersProvider } from "./contexts/UsersContext";
import Users from "./components/벨로퍼트 API연습/Users.jsx";
import SignUp from "./components/login/SignUp.jsx";
import Register from "./components/login/Register.jsx";
import Login from "./components/login/Login.jsx";
import MainPage from "./components/login/MainPage.jsx";
import axios from "axios";  
import { baseURL } from "./api/api.jsx";

function App() {
  //페이지 로딩 시 acesstoken에 접근을 해서 토큰 에러가 뜬다면 로그인 화면으로 보내주고
  //아니라면 그냥 화면 보여주기
  const accessToken = async() =>{
    try{
      const response = await baseURL.get("/accesstoken", {
        withCredentials: true
      });

      console.log(response.data)
    }catch(e){
      console.log(e);
    }
  }

  const refreshToken = async() => {
    try{
      const response = await baseURL.get("/refreshtoken", {
        withCredentials: true
      })
      console.log(response.data)
    }catch(e){
      console.log(e);
    }
  }

  return (
    <UsersProvider>
      <Main>
        <div className="tokens">
          <button onClick={accessToken}>액세스 토큰</button>
          <button onClick={refreshToken}>리프레쉬 토큰</button>
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="main" element={<MainPage />} />
        </Routes>
      </Main>
    </UsersProvider>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;

  .tokens{
    position: absolute;
    top: 0;
    font-size: 5rem;
  }
`;

export default App;
