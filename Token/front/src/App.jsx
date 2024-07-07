import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { baseURL } from "./api/api.jsx";
import MainHeader from "./components/login/MainHeader.jsx";
import SignUp from "./components/login/SignUp.jsx";
import MainPage from "./components/login/MainPage.jsx";
import Home from "./components/login/Home.jsx";
import About from "./components/login/About.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
} 

export default App;
