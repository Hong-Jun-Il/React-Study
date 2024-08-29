import { useQuery } from "@tanstack/react-query";
import { getStates } from "../../api/StatesApi";
import { getLanguages } from "../../api/LanguagesApi";

export function useStates(){
    return useQuery({
        queryKey: ["states"],
        queryFn: getStates
    })
}

export function useLanguages(){
    return useQuery({
        queryKey: ["languages"],
        queryFn: getLanguages
    })
}