export type TodoType = {
    id: number,
    done: boolean,
    title: string,
    description: string
};

export type TodoResponseType<T> = {
    message: string,
    data: T
}

export type TodoInputType = {
    title: string,
    description: string
}