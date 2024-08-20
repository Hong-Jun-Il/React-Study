import { create } from "zustand";
import { createUserSlice } from "@/store/user-slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart-slice";
import { StoreType } from "@/types/StoreType";
import { devtools, subscribeWithSelector } from "zustand/middleware";

export const useStore = create<StoreType>()(
    devtools(
        subscribeWithSelector(
            immer((...a) => ({
                ...createUserSlice(...a),
                ...createCartSlice(...a)
            }))
        )
    ))