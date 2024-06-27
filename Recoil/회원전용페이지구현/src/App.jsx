import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";
import MyPage from "./components/MyPage";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  

  return (
    <Main>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="mypage" element={<MyPage />} />
        </Route>
      </Routes>
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

export default App;
