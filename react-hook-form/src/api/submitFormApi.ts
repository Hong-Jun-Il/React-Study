import { SchemaType } from "../users/types/schema";
import { axiosInstance } from "./api";

export const submitForm = async(data: SchemaType)=>{
    try {
        const response = await axiosInstance.post("/submit", data);

        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}