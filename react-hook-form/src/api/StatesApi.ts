import { OptionType } from "../users/types/option";
import { axiosInstance } from "./api";

type GetStatesResponseType<T> = {
  message: string;
  states: T[];
}

export const getStates = async (): Promise<OptionType[]> => {
  try {
    const response =
      await axiosInstance.get<GetStatesResponseType<OptionType>>("/getstates");

    return response.data.states;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
