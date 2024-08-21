import { StateCreator } from "zustand";
import { ProductType } from "../types/ProductType";
import { CartProductType } from "../types/CartProductType";

type CartStateType = {
    products: CartProductType[];
    total: number;
};

type CartActionType = {
    addProduct: (product: ProductType) => void;
    removeProduct: (productId: string) => void;
    incQty: (productId: string) => void;
    decQty: (productId: string) => void;
}

export type CartSliceType = CartStateType & CartActionType;

const initialState: CartStateType = {
    products: [],
    total: 0
};

export const cartSlice: StateCreator<CartSliceType, [["zustand/immer", never]], [], CartSliceType> = (set, get) => ({
    ...initialState,
    addProduct: (product: ProductType) => set((state) => {
        state.products.push({ ...product, qty: 1 });
    }),
    removeProduct: (productId: string) => set((state) => {
        state.products = state.products.filter(product => product.id !== productId);
    }),
    incQty: (productId: string) => set((state) => {
        const target = state.products.find(product => product.id === productId);

        if (target) {
            target.id += 1;
        }
    }),
    decQty: (productId: string) => set((state) => {
        const targetIndex = state.products.findIndex(product => product.id === productId);

        if (state.products[targetIndex]) {
            if (state.products[targetIndex].qty === 1) {
                state.products.splice(targetIndex, 1);
            }
            else {
                state.products[targetIndex].qty -= 1;
            }
        }
    })
});
