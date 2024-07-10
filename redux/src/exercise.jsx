import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
       addTodo(state, action){
            state.todos = action.payload.data
       }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
});

export const todoActions = todoSlice.actions;