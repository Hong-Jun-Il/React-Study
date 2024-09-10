import { Controller, useFormContext } from "react-hook-form";
import { SignUpSchemaType } from "../../types/schema";
import { useEffect } from "react";
import { useCreateUser } from "../../hooks/mutations";
import { useGetUser } from "../../hooks/queries";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function SignUp() {
  const { control, handleSubmit, watch } = useFormContext<SignUpSchemaType>();

  const createUserMutation = useCreateUser();

  const onSubmit = (data: SignUpSchemaType) => {
    createUserMutation.mutate(data);
  };

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={control}
        name="nickname"
        render={({ field }) => (
          <FormItem>
            <FormLabel>nickname</FormLabel>
            <FormControl>
              <Input placeholder="nickname" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </form>
  );
}
