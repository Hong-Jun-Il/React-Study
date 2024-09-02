import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SchemaType } from "../types/schema";
import { submitForm } from "../../api/submitFormApi";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SchemaType) => submitForm(data),

    onSuccess: async()=>{
      await queryClient.invalidateQueries()
    }
  });
}
