import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        
        return response.data;
    } catch (e) {
        return e;
    }
});

const initialState = {
    users: [],
    isLoading: true,
    error: false,
    total: 0
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        calcTotal(state) {
            state.total = state.users.length;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.isLoading = false;
                state.error = true;
            })
    }
})

export const { calcTotal } = usersSlice.actions;