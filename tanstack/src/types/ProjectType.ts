export type ProjectType = {
    id: number,
    name: string,
};

export type ProjectResponseType<T> = {
    message: string,
    data: T[]
}