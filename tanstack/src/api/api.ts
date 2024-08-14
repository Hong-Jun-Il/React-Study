import axios from "axios";
import { Todo, TodoResponse } from "../types/todo";

export const BASE_URL = "http://localhost:8123";

export const axiosInstance = axios.create({
    baseURL: BASE_URL
})

export const getTodosIds = async (): Promise<number[]> => {
    try {
        const response = await axiosInstance.get<TodoResponse<Todo[]>>("/todoids");
        return response.data.data.map(todo => todo.id ?? 0);
    } catch (e: unknown) {
        console.error(e);
        throw e;
    }
}

export const getTodo = async (id: number): Promise<Todo> => {
    try {
        const response = await axiosInstance.get<TodoResponse<Todo>>("/todos", {
            params: {
                id
            }
        });

        return response.data.data
    } catch (e: unknown) {
        console.error(e);
        throw e
    }
}

export const createTodo = async (data: Todo) => {
    try{
        const response = await axiosInstance.post("/createtodo", data);

        console.log(response.data);
    }catch(e){
        console.error(e);
        throw e
    }
}

export const updateTodo = async(data: Todo) => {
    try{
        const response = await axiosInstance.put("/completetodo", data);
        
        console.log(response.data);
    }catch(e){
        console.error(e);
        throw e;
    }
}

export const deleteTodo = async(data: Todo)=>{
    try {
        const response = await axiosInstance.delete("/deletetodo", {
            params: {
                id: data.id!
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error(error);
        throw error
    }
}