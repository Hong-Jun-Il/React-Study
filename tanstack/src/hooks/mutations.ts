import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, toggleUpdateTodo } from "../api/api";
import { TodoInputType } from "../types/TodoType";

export function useToggleUpdataTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => toggleUpdateTodo(id),

        onMutate: () => {
            console.log("toggle update todo mutate 시작");
        },

        onError: (error) => {
            console.log("toggle update todo error", error);
        },

        onSuccess: () => {
            console.log("toggle update todo success");
        },

        onSettled: async (_, error, variables) => {
            if (error) {
                console.log("toggle update todo error");
            }
            else {
                await queryClient.invalidateQueries({
                    queryKey: ["todos", { id: variables }]
                })
            }
        }
    })
}

export function useCreateTodo() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: TodoInputType) => createTodo(data),

        onMutate: () => {
            console.log("create todo mutate 시작");
        },

        onError: () => {
            console.log("create todo error");
        },

        onSuccess: () => {
            console.log("create todo success");
        },

        onSettled: (_, error) => {
            if (error) {
                console.log("create todo 에러가 발생함");
            }
            else {
                queryClient.invalidateQueries({
                    queryKey: ["todo-ids"]
                })
            }
        }
    })
}

export function useDeleteTodo(){
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => deleteTodo(id),

        onMutate: () => {
            console.log("delete todo mutate 시작");
        },

        onError: () => {
            console.log("delete todo error");
        },

        onSuccess: () => {
            console.log("delete todo success");
        },

        onSettled: (_, error) => {
            if (error) {
                console.log("delete todo 에러가 발생함");
            }
            else {
                queryClient.invalidateQueries({
                    queryKey: ["todo-ids"]
                })
            }
        }
    })
}