import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Question from "./components/Question";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  const [score, setScore] = useState({
    EI: 0,
    SN: 0,
    TF: 0,
    PJ: 0
  })

  const updateScore = (type, value) => {
    setScore({
      ...score,
      [type]: score[type]+value
    })
  }

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
