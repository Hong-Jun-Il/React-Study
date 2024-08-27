export type OptionType = {
    id: string;
    label: string;
}

export type OptionResponseType<T> = {
    message: string;
    states: T[];
}