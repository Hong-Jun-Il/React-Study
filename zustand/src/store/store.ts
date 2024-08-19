import { create } from "zustand";
import { createUserSlice } from "@/store/user-slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { StoreType } from "@/types/StoreType";
import { devtools } from "zustand/middleware";

export const useStore = create<StoreType>()(
    devtools(
        immer((...a) => ({
            ...createUserSlice(...a),
            ...createCartSlice(...a)
        }))
    ))