import axios from "axios";
import { TodoInputType, TodoResponseType, TodoType } from "../types/TodoType";
import { ProjectResponseType, ProjectType } from "../types/ProjectType";
import { ProductResponseType, ProductsResponseType, ProductType } from "../types/ProductType";

const BASE_URL = "http://localhost:8123";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const getTodoIds = async (): Promise<number[]> => {
    try {
        const response = await axiosInstance.get<TodoResponseType<number[]>>("/gettodoids");

        return response.data.data
    } catch (e: unknown) {
        console.error(e);
        throw e
    }
}

export const getTodo = async (id: number): Promise<TodoType> => {
    try {
        const response = await axiosInstance.get<TodoResponseType<TodoType>>("/gettodo", {
            params: {
                id
            }
        })

        return response.data.data;
    } catch (e: unknown) {
        console.error(e);
        throw e
    }
}

export const toggleUpdateTodo = async (id: number) => {
    try {
        const response = await axiosInstance.put("/updatetodo", {
            id
        });

        console.log(response.data);
    } catch (e: unknown) {
        console.log(e);
    }
}

export const createTodo = async (data: TodoInputType) => {
    try {
        const response = await axiosInstance.post("/createtodo", {
            title: data.title,
            description: data.description
        })

        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = async (id: number) => {
    try {
        const response = await axiosInstance.delete("/deletetodo", {
            params: {
                id
            }
        })

        console.log(response.data);
    } catch (error: unknown) {
        console.log(error);
    }
}

export const getProjects = async (page: number): Promise<{ totalPages: number, items: ProjectType[] }> => {
    try {
        const response = await axiosInstance.get<ProjectResponseType<ProjectType>>("/getprojects", {
            params: {
                page,
                limit: 3
            }
        })

        return { totalPages: response.data.totalPages, items: response.data.items };
    } catch (error: unknown) {
        console.log(error);
        throw error
    }
}

export const getProducts = async ({ pageParam }: { pageParam: number }): Promise<ProductType[]> => {
    try {
        const response = await axiosInstance.get<ProductsResponseType<ProductType[]>>("/getproducts", {
            params: {
                page: pageParam,
                limit: 5,
            }
        });

        return response.data.products;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProduct = async (id: number): Promise<ProductType> => {
    try {
        const response = await axiosInstance.get<ProductResponseType<ProductType>>("/getproduct", {
            params: {
                id
            }
        });

        return response.data.product;
    } catch (error) {
        console.log(error);
        throw error;
    }
}