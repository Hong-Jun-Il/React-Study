import { FormProvider, useForm } from "react-hook-form";
import { defaultValues, schema, SchemaType } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginTest } from "./LoginTest";

export function LoginProvider() {
  const methods = useForm<SchemaType>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <LoginTest />
    </FormProvider>
  );
}
