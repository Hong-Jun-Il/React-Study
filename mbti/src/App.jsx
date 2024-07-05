import './App.css';
import Start from './components/Start';
import Question from './components/Question';
import Result from './components/Result';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/question"
          element={
            <Question />
          }
        />
        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
    </>
  );
}

export default App;