import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { todoActions } from "./exercise"

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector(state => state.todo.todos);
  const dispatch = useDispatch();
  console.log(todos)

  return (
    <RootWrapper>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={() => {
        dispatch(todoActions.addTodo({
          text: input,
          until: "내일시발아"
        }));
        setInput("");
      }}>등록</button>
      <ul>
        {todos.map(todo=>{
          return <li key={todo.id}>
            <span>{todo.id}</span>
            <span done = {todo.done}>{todo.text}</span>
            <span>{todo.until}</span>
          </li>
        })}
      </ul>
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    min-height: 100vh;

    li{
      border: 1px solid red;

      span{
        color: ${({done})=>done ? "black" : "red"};
      }
    }
  }
`;

export default App;
