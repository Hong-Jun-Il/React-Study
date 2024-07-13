import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");

        return response.data;
    } catch (e) {
        return e;
    }
});

const initialState = {
    todos: [],
    isLoading: true,
    error: false,
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
    }
})