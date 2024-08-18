import { create, StateCreator } from "zustand";

type UserState = {
    userName: string,
    fullName: string,
    age: number,
    address: string
};

type UserActions = {
    setAddress: (address: string) => void,
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
    address: "",
    age: 0,
    fullName: "",
    userName: "",
    setAddress: (address) => set(() => ({
        address
    }))
})

const useCountStore = create<{ nested: { count: number }; inc: () => void }>((set) => ({
    nested: { count: 0 },
    inc: () => set((state) => ({
        nested: { ...state.nested, count: state.nested.count + 1 }
    }))
}))
