import { z } from "zod";
import { patterns } from "../utils/patterns";

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .refine((text) => patterns.email.test(text), {
        message: "Email is not valid",
      }),
    nickname: z
      .string()
      .min(1, { message: "Nickname is required" })
      .max(15, { message: "Nickname is too long" })
      .refine((text) => patterns.nickname.test(text), {
        message: "Nickname is not valid",
      }),
    id: z
      .string()
      .min(1, { message: "Id is required" })
      .max(12, { message: "Id is too long" })
      .trim()
      .refine((text) => patterns.id.test(text), { message: "Id is not valid" }),
    pw: z
      .string()
      .min(1, { message: "Password is required" })
      .max(24, { message: "Password is too long" })
      .trim()
      .refine((text) => patterns.pw.test(text), {
        message: "Password is not valid",
      }),
    pwCheck: z.string().min(1, { message: "Check Password" }).trim(),
  })
  .refine((data) => data.pw === data.pwCheck, {
    message: "Passwords do not match",
    path: ["pwCheck"],
  });

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const signUpDefaultValues: SignUpSchemaType = {
  email: "",
  nickname: "",
  id: "",
  pw: "",
  pwCheck: "",
};

export const SignInSchema = z.object({
  id: z.string().min(1, { message: "아이디를 입력해주세요" }),
  pw: z.string().min(1, { message: "비밀번호를 입력해주세요" }),
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const SignInDefaultValues: SignInSchemaType = {
  id: "",
  pw: "",
};
