import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { UsersProvider } from "./contexts/UsersContext";
import Users from "./components/벨로퍼트 API연습/Users.jsx";
import SignUp from "./components/login/SignUp.jsx";
import Register from "./components/login/Register.jsx";
import Login from "./components/login/Login.jsx";

function App() {

  return (
    <UsersProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Login />} />
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
`;

export default App;
