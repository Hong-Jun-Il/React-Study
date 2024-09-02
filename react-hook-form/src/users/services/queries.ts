import { useQuery } from "@tanstack/react-query";
import { getStates } from "../../api/StatesApi";
import { getLanguages } from "../../api/LanguagesApi";
import { getGenders } from "../../api/GendersApi";
import { getSkills } from "../../api/SkillsApi";
import { OptionType } from "../types/option";
import { axiosInstance } from "../../api/api";
import { ApiGet } from "../types/apiTypes";
import { SchemaType } from "../types/schema";

export function useStates() {
  return useQuery({
    queryKey: ["states"],
    queryFn: getStates,
  });
}

export function useLanguages() {
  return useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
  });
}

export function useGenders() {
  return useQuery({
    queryKey: ["genders"],
    queryFn: getGenders,
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: getSkills,
  });
}

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<OptionType[]> => {
      try {
        const response = await axiosInstance.get<ApiGet[]>("/getusers");

        return response.data.map(
          (user) =>
            ({
              id: user.id,
              label: user.name,
            }) satisfies OptionType,
        );
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", { id }],
    queryFn: async (): Promise<SchemaType> => {
      try {
        const { data } = await axiosInstance.get<ApiGet>("/getuser", {
          params: {
            id,
          },
        });

        return {
          variant: "edit",
          id: data.id,
          name: data.name,
          email: data.email,
          formetEmploymentPeriod: [
            new Date(data.formetEmploymentPeriod[0]),
            new Date(data.formetEmploymentPeriod[1]),
          ],
          gender: data.gender,
          laguagesSpoken: data.languagesSpoken,
          registrationDateAndTime: new Date(data.registrationDateAndTime),
          salaryRange: [data.salaryRange[0], data.salaryRange[1]],
          skills: data.skills,
          states: data.states,
          students: data.students,
          isTeacher: data.isTeacher,
        };

      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });
}
