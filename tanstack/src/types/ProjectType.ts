export type ProjectType = {
    id: number,
    name: string,
};

export type ProjectResponseType<T> = {
    message: string,
    items: T[],
    totalPages: number
}