import { z } from "zod";
import { patterns } from "../../utils/patterns";

export const schema = z
  .intersection(
    z.object({
      name: z.string().min(1, { message: "Required" }),
      email: z
        .string()
        .min(1, { message: "Email is required" })
        .refine((text) => patterns.email.test(text), {
          message: "Email is not valid",
        }),
      states: z.array(z.string()).min(1).max(2),
      laguagesSpoken: z.array(z.string()),
      gender: z.string().min(1),
      skills: z.array(z.string()).min(1, { message: "Skills is required" }),
      registrationDateAndTime: z.date(),
      formetEmploymentPeriod: z.array(z.date()).min(2).max(2),
      salaryRange: z.array(z.number()).min(2).max(2),
      isTeacher: z.boolean(),
    }),

    z.discriminatedUnion("variant", [
      z.object({ variant: z.literal("create") }),
      z.object({ variant: z.literal("edit"), id: z.string().min(1) }),
    ]),
  )
  .and(
    z.union([
      z.object({ isTeacher: z.literal(false) }),
      z.object({
        isTeacher: z.literal(true),
        students: z.array(
          z.object({
            name: z.string().min(4),
          }),
        ),
      }),
    ]),
  );

export type SchemaType = z.infer<typeof schema>;

export const defaultValues: SchemaType = {
  variant: "create",
  email: "",
  name: "",
  states: [],
  laguagesSpoken: [],
  gender: "",
  skills: [],
  registrationDateAndTime: new Date(),
  formetEmploymentPeriod: [new Date(), new Date()],
  salaryRange: [0, 2000],
  isTeacher: false,
};
