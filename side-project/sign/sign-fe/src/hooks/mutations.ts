import { useMutation } from "@tanstack/react-query";
import { SignUpSchemaType } from "../types/schema";
import { axiosInstance } from "../api/api";

export function useCreateUser(){
    return useMutation({
        mutationFn: async(data: SignUpSchemaType): Promise<void>=>{
            try {
                const response = await axiosInstance.post("/user", data);

                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    })
}