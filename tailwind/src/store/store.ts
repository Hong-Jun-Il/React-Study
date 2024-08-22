import { create } from "zustand";
import { CartSliceType, createCartSlice } from "./CartSlice";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type StoreType = CartSliceType;

export const useStore = create<StoreType>()(
    persist(
        immer((...a) => ({
            ...createCartSlice(...a),
        })),
        {
            name: "local-storage"
        }
    )
)