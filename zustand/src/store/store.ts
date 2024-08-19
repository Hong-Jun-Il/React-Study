import { create } from "zustand";
import { createUserSlice } from "@/store/user-slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { StoreType } from "@/types/StoreType";

export const useStore = create<StoreType>()(
    immer((...a)=>({
    ...createUserSlice(...a),
    ...createCartSlice(...a)
})))