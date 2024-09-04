import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SchemaType } from "../types/schema";
import { axiosInstance } from "../../api/api";
import omit from "lodash/omit";
import { mapData } from "../../utils/mapData";

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SchemaType): Promise<void> => {
      try {
        const response = await axiosInstance.post(
          "/submit",
          omit(mapData(data), "variant"),
        );

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      alert("User created!");
    },
  });
}

export function useEditUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: SchemaType): Promise<void> => {
      if (data.variant === "edit") {
        try {
          const response = await axiosInstance.put(
            `/edituser/${data.id}`,
            omit(mapData(data), "variant"),
          );

          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
        alert("User edit successfully!");
      }
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      if (variables.variant === "edit") {
        queryClient.invalidateQueries({
          queryKey: ["user", { id: variables.id }],
        });
      }
    },
  });
}
