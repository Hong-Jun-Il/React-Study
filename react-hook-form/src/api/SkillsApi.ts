import { OptionType } from "../users/types/option";
import { axiosInstance } from "./api";

type SkillsResponseType<T> = {
  message: string;
  skills: T[];
};

export const getSkills = async (): Promise<OptionType[]> => {
  try {
    const response =
      await axiosInstance.get<SkillsResponseType<OptionType>>("/getskills");

    return response.data.skills;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
