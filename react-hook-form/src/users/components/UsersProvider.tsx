import { FormProvider, useForm } from "react-hook-form";
import { schema, SchemaType } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Users from "./Users";

export function UsersProvider() {
  const methods = useForm<SchemaType>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
}
