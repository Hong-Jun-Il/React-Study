import { create } from "zustand";
import { cartSlice, CartSliceType } from "./CartSlice";
import { immer } from "zustand/middleware/immer";

type TestStoreType = CartSliceType;

export const useTestStore = create<TestStoreType>()(
    immer((...a)=>({
        ...cartSlice(...a)
    }))
)