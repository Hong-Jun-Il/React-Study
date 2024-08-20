import { StateCreator } from "zustand";

type UserState = {
    userName: string,
    fullName: string,
    age: number,
    address: string,
    fetchUser: () => Promise<void>
};

type UserActions = {
    setAddress: (address: string) => void,
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [["zustand/immer", never]], [], UserSlice> = (set) => ({
    address: "",
    age: 0,
    fullName: "",
    userName: "",
    setAddress: (address) => set((state) => {
        state.address = address;
    }),
    fetchUser: async()=>{
        await new Promise((resolve)=> (
            setTimeout(resolve, 1000)
        ))
        set({
            address: "",
            fullName: "홍준일",
            userName: "준일",
            age: 24
        })
    }

})