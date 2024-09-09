import { FormProvider, useForm } from "react-hook-form";
import {
  signUpDefaultValues,
  SignUpSchema,
  SignUpSchemaType,
} from "../../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import SignUp from "./SignUp";

export function SignUpProvider() {
  const methods = useForm<SignUpSchemaType>({
    mode: "all",
    resolver: zodResolver(SignUpSchema),
    defaultValues: signUpDefaultValues,
  });

  return (
    <FormProvider {...methods}>
      <SignUp />
    </FormProvider>
  );
}
