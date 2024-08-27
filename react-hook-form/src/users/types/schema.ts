import { z } from "zod";
import { patterns } from "../../utils/patterns";

export const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .refine((text) => patterns.email.test(text), {
      message: "Email is not valid",
    }),
  states: z.array(z.string()).min(1).max(2),
});

export type SchemaType = z.infer<typeof schema>;

export const defaultValues: SchemaType = {
  email: "",
  name: "",
  states: [],
};
