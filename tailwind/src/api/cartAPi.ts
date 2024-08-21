import { ItemType } from "../types/ItemType";
import { axiosInstance } from "./api";

type GetItemsResponseType = {
    message: string;
    items: ItemType[];
};

export const getItems = async ({ pageParam }: { pageParam: number }): Promise<ItemType[]> => {

    try {
        const response = await axiosInstance.get<GetItemsResponseType>("/getitems", {
            params: {
                page: pageParam,
                limit: 4
            }
        });

        return response.data.items;
    } catch (error) {
        console.log(error);
        throw error;
    }
}