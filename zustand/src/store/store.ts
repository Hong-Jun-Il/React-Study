import { StoreType } from "@/types/storeType";
import { create } from "zustand";
import { createUserSlice } from "@/store/user-slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";

export const useStore = create<StoreType>()(
    immer((...a)=>({
    ...createUserSlice(...a),
    ...createCartSlice(...a)
})))