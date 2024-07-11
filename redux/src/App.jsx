import styled, { css } from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { testActions, todoActions } from "./exercise"

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const todos = useSelector(state => state.todos);
  const counter = useSelector(state => state.counter);
  const text = useSelector(state=>state.text);
  const dispatch = useDispatch();

  return (
    <RootWrapper>
      <section className="todoSection">
        <div className="todo-input-section">
          <input type="text" value={todoInput} onChange={e => setTodoInput(e.target.value)} />
          <button onClick={() => {
            dispatch(testActions.addTodo({
              text: todoInput,
              done: false,
              until: "내일"
            }));
            setTodoInput("");
          }}>등록</button>
        </div>
        <ul className="todo-list-section">
          {todos.map(todo => {
            return <li key={todo.id}>
              <StyledH2 onClick={()=>{
                dispatch(testActions.toggleTodo(todo.id));
              }} $done={todo.done}>{todo.text}</StyledH2>
              <span>{todo.until}</span>
              <button onClick={() => {
                dispatch(testActions.removeTodo(todo.id));
              }}>삭제</button>
            </li>
          })}
        </ul>
      </section>
      <section className="counterSection">
        <h1>{counter}</h1>
        <div className="btns">
          <button onClick={() => {
            dispatch(testActions.decrease());
          }}>-1</button>
          <button onClick={() => {
            dispatch(testActions.resetCounter());
          }}>reset</button>
          <button onClick={() => {
            dispatch(testActions.increase());
          }}>+1</button>
        </div>
      </section>
      <section className="textSection">
        <input type="text" value={textInput} onChange={e=>{
          setTextInput(e.target.value);
        }} />
        <button onClick={()=>{
          dispatch(testActions.setText(textInput));
          setTextInput("");
        }}>등록</button>
        {text}
      </section>
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  section{
    flex: 1;
    border: 1px solid red;
    height: 100vh;
  }
  .todoSection{

    .todo-input-section{
      height: 30%;
      border-bottom: 1px solid green;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .todo-list-section{
      height: 70%;
      font-size: 3rem;

      li{
        border: 1px solid red;
      }
    }
  }

  .counterSection{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 3rem;

    .btns{
      button{
        font-size: 3rem;
      }
    }
  }

  .textSection{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
  }
`;

const StyledH2 = styled.h2`
  color: ${({ $done }) => $done ? "black" : "red"};
`;

export default App;
