export type ProductType = {
    id: number,
    name: string
}

export type ProductsResponseType<T> = {
    message: string,
    products: T,
    totalPages: number
}

export type ProductResponseType<T> = {
    message: string,
    product: T
}