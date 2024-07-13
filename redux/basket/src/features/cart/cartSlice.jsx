import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";

export const getCartItems = createAsyncThunk(
    "cart/getCartItems",
    async () => {
        const response = await axios.get("https://www.course-api.com/react-useReducer-cart-project");
        return response.data;
    }
    // ()=>{
    //     return fetch("https://www.course-api.com/react-useReducer-cart-project")
    // .then((resp) => resp.json())
    // .catch((err) => console.log(err));
    // }
)

const initialState = {
    cartItems: [],
    amount: 0,
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
        },
        calcTotals(state, action){
            let amount = 0;
            let total = 0;

            state.cartItems.map(item=>{
                amount++;
                total+=Number(item.price);
            })

            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: (builder)=>{
        builder.
        addCase(getCartItems.pending, (state, action)=>{
            state.isLoading = true;
        })
        .addCase(getCartItems.fulfilled, (state, action)=>{
            console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        })
        .addCase(getCartItems.rejected, (state, action)=>{
            state.isLoading = false;
        })
    }
})

export const { clearCart, removeItem, increase, decrease, calcTotals } = cartSlice.actions;