export type Todo = {
    checked: boolean,
    title: string,
    description: string,
    id?: number
}

export type TodoResponse<T> = {
    message: string,
    data: T
}