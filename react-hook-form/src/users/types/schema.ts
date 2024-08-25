import { z } from "zod";
import { patterns } from "../../utils/patterns";

export const schema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z
    .string()
    .min(1, { message: "Email is requited" })
    .refine((text) => patterns.email.test(text), {
      message: "Email is not valid",
    }),
});

export type SchemaType = z.infer<typeof schema>;
