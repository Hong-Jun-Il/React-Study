import React, { useState } from 'react';
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId, useTodoState } from '../contexts/TodoContext';

const Todo = () => {
    const [input, setInput] = useState("");
    const todos = useTodoState();
    const nextId = useTodoNextId();
    const dispatch = useTodoDispatch();

    const onCreate = () => {
        if(!input){
            alert("입력");
            return;
        }
        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current++,
                text: input,
                done: false
            }
        })

        setInput("");
    }

    const onRemove = (id) => {
        dispatch({
            type: "DELETE",
            id: id
        })
    }

    const onToggle = (id) => {
        dispatch({
            type: "TOGGLE",
            id: id
        })
    }

    return (
        <StyledTodo>
            <div>할 일 0개 남음</div>
            <input type="text" value={input} onChange={(e) => {
                setInput(e.target.value);
            }} />
            <button onClick={onCreate}>만들기</button>
            {todos.map(todo => {
                return <div key={todo.id}>
                    <StyledSpan done={todo.done ? 1 : 0} onClick={()=>onToggle(todo.id)}>{todo.text}</StyledSpan>
                    <button onClick={()=>onRemove(todo.id)}>삭제</button>
                </div>
            })}
        </StyledTodo>
    );
};

const StyledTodo = styled.section`
    width: 500px;
    height: 600px;
    border: 1px solid red;
    font-size: 3rem;

    div{
        width: 100%;
        display: flex;
        justify-content: space-between;

        button{
            cursor: pointer;
        }
    }
`;

const StyledSpan = styled.span`
    color: ${props => props.done ? "red" : "black"};
    cursor: pointer;
`;

export default React.memo(Todo);