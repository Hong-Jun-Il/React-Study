import { OptionResponseType, OptionType } from "../users/types/option";
import { axiosInstance } from "./api";

export const getStates = async (): Promise<OptionType[]> => {
  try {
    const response =
      await axiosInstance.get<OptionResponseType<OptionType>>("/getstates");

    return response.data.states;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
