import { configureStore, createSlice } from "@reduxjs/toolkit";

let nextId = 2;
const initialState = {
    todos: [{
        id: 1,
        text: "밥먹기",
        done: false,
        until: "2024-07-11"
    }],
    // counter: 0,
    // text: ""
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
       addTodo(state, action){
            state.todos.push({
                id: nextId++,
                text: action.payload.text,
                done: false,
                until: action.payload.until
            });
       },
    //    removeTodo(state, action){
    //         state.todos = state.todos.filter(todo=>todo.id!==action.data.id);
    //    }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
});

export const todoActions = todoSlice.actions;