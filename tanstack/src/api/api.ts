import axios from "axios";
import { Todo, TodoResponse } from "../types/todo";

export const BASE_URL = "http://localhost:8123";

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export const getTodosIds = async ():Promise<number[]> => {
    try{
        const response = await axiosInstance.get<TodoResponse<Todo[]>>("todos");
        return response.data.data.map(todo=>todo.id ?? 0);
    }catch(e: unknown){
        console.error(e);
        throw e;
    }
}