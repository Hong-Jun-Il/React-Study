import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    counter: 0,
    error: null
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase(state) {
            state.counter += 1;
        },
        decrease(state) {
            state.counter -= 1;
        },
        reset(state){
            state.counter = 0;
        }
    }
})

export const {increase, decrease, reset} = counterSlice.actions;