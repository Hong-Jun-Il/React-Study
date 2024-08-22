import { create } from "zustand";
import { CartSliceType, createCartSlice } from "./CartSlice";
import { immer } from "zustand/middleware/immer";
import { persist, subscribeWithSelector } from "zustand/middleware";

type StoreType = CartSliceType;

export const useStore = create<StoreType>()(
    persist(
        subscribeWithSelector(
            immer((...a) => ({
                ...createCartSlice(...a),
            }))
        ),
        {
            name: "local-storage"
        }
    )
)