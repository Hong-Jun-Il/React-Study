import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/api";

// type UsersResponseType = {
//     message: string;
//     uesrs: 
// }

export function useGetUser(){
    return useQuery({
        queryKey: ["users"],
        queryFn: async()=>{
            try {
                const response = await axiosInstance.get("/user");

                return response.data;
            } catch (error) {
                console.log(error);
            }
        }
    })
}