import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Todo from "./components/Todo";
import ItemList from "./components/ItemList";
import Cart from "./components/Cart";

function App() {

  return (
    <Main>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="cartlist" element={<Cart />} />
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
