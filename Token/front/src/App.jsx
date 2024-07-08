import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { baseURL } from "./api/api.jsx";
import MainHeader from "./components/login/MainHeader.jsx";
import Login from "./components/login/Login.jsx";
import SignUp from "./components/login/SignUp.jsx";
import MainPage from "./components/login/MainPage.jsx";
import MyPage from "./components/login/MyPage.jsx";
import Home from "./components/login/Home.jsx";
import ProtectedRoute from "./components/login/ProtectedRoute.jsx";

function App() {

  return (
    <RootWrapper>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="mypage" element={<MyPage />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </RootWrapper>
  );
}

const RootWrapper = styled.main`
    background-color: #232B29;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default App;
