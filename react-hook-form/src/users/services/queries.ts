import { useQuery } from "@tanstack/react-query";
import { getStates } from "../../api/StatesApi";
import { getLanguages } from "../../api/LanguagesApi";
import { getGenders } from "../../api/GendersApi";

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
