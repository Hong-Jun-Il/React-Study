import { z } from "zod";

export const schema = z.object({
  id: z
    .string()
    .min(1, { message: "아이디를 입력해주세요" })
    .max(20, "20자 미만으로 입력해주세요"),
  pw: z
    .string()
    .min(1, { message: "비밀번호를 입력해주세요" })
    .max(20, { message: "20자 미만으로 입력해주세요" }),
});

export type SchemaType = z.infer<typeof schema>;

export const defaultValues: SchemaType = {
  id: "",
  pw: "",
};
