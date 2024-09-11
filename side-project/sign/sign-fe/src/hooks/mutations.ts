import { useMutation } from "@tanstack/react-query";
import { SignUpSchemaType } from "../types/schema";
import { axiosInstance } from "../api/api";
import { UserType } from "@/types/user";
import { useNavigate } from "react-router-dom";

type CreateResponseType = {
  message: string;
  user: UserType;
};

export function useCreateUser() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SignUpSchemaType): Promise<void> => {
      try {
        const response = await axiosInstance.post<CreateResponseType>(
          "/user",
          data,
        );

        alert("회원가입 성공!");
        navigate("/signin");
      } catch (error) {
        console.log(error);
        alert("회원가입 에러!")
      }
    },
  });
}
