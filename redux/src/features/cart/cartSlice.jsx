import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart(state, action) {
            state.cartItems = [];
        },
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increase(state, action) {
            const targetItem = state.cartItems.find(item => item.id === action.payload.id);
            targetItem.amount += 1;
        },
        decrease(state, action) {
            const targetItem = state.cartItems.find(item => item.id === action.payload.id);

            targetItem.amount -= 1;
        }
    }
})

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;