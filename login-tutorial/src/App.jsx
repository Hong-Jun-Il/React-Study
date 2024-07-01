import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import SignUp from "./components/login/SignUp";
import DataList from "./components/api/DataList";

function App() {

  return (
    <Main>
      <Routes>
        <Route path="/" element={<DataList />} />
      </Routes>
    </Main>
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
