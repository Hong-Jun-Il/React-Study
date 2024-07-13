import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchTodos } from '../features/todoSlice';

const Todos = () => {
    const {todos, isLoading, error} = useSelector(store => store.todos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodos());
    }, [])

    return (
        <TodosSetion>
            {todos.map(todo=>{
                return (
                    <li key={todo.id}>{todo.title}</li>
                )
            })}
        </TodosSetion>
    );
};

const TodosSetion = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default Todos;