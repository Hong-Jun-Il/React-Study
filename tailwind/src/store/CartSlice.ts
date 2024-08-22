import { StateCreator } from "zustand";
import { CartProductType } from "../types/CartProductType";
import { ItemType } from "../types/ItemType";

type CartStateType = {
    cartProducts: CartProductType[];
    total: number;
}

type CartActionType = {
    addProduct: (product: ItemType) => void;
    removeProduct: (productId: number) => void;
    incQty: (productId: number) => void;
    decQty: (productId: number) => void;
}

export type CartSliceType = CartStateType & CartActionType;

const initialState: CartStateType = {
    cartProducts: [],
    total: 0
}

export const createCartSlice: StateCreator<CartSliceType, [["zustand/immer", never]], [], CartSliceType> = (set, get) => ({
    ...initialState,
    addProduct: (product: ItemType) => set((state) => {
        state.cartProducts.push({ ...product, qty: 1 });
    }),
    removeProduct: (productId: number) => set((state) => {
        const targetIndex = state.cartProducts.findIndex((product) => product.id === productId);

        if (targetIndex !== -1) {
            state.cartProducts.splice(targetIndex, 1);
        }
    }),
    incQty: (productId: number) => set((state) => {
        const targetIndex = state.cartProducts.findIndex((product) => product.id === productId);

        if (targetIndex !== -1) {
            state.cartProducts[targetIndex].qty += 1;
        }
    }),
    decQty: (productId: number) => set((state) => {
        const targetIndex = state.cartProducts.findIndex((product) => product.id === productId);

        if (targetIndex !== -1) {
            if (state.cartProducts[targetIndex].qty === 1) {
                state.cartProducts.splice(targetIndex, 1);
            }
            else {
                state.cartProducts[targetIndex].qty -= 1;
            }
        }
    })
})