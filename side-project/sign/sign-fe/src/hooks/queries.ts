import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/api";
import { UserType } from "@/types/user";

type UsersResponseType = {
    users: UserType[],
    message: string;
}

export function useGetUser(){
    return useQuery({
        queryKey: ["users"],
        queryFn: async(): Promise<UserType[]>=>{
            try {
                const response = await axiosInstance.get<UsersResponseType>("/user");

                return response.data.users;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    })
}