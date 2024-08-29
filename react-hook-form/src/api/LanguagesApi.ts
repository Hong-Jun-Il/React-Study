import { OptionType } from "../users/types/option";
import { axiosInstance } from "./api";

type GetLanguagesResponseType<T> = {
  message: string;
  languages: T[];
};

export const getLanguages = async (): Promise<OptionType[]> => {
  try {
    const response =
      await axiosInstance.get<GetLanguagesResponseType<OptionType>>(
        "/getlanguages",
      );

    return response.data.languages;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
