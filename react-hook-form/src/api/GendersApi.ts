import { OptionType } from "../users/types/option";
import { axiosInstance } from "./api";

type GendersResponseType<T> = {
  message: string;
  genders: T[];
};

export const getGenders = async (): Promise<OptionType[]> => {
  try {
    const response =
      await axiosInstance.get<GendersResponseType<OptionType>>("/getgenders");

    return response.data.genders;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
