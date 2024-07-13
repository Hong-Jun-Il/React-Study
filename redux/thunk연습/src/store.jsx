import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./features/usersSlice";
import { todosSlice } from "./features/todoSlice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        todos: todosSlice.reducer
    }
})