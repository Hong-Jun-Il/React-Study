import { useFormContext } from "react-hook-form";
import { SignUpSchemaType } from "../../types/schema";
import { useEffect } from "react";
import { useCreateUser } from "../../hooks/mutations";
import { ShadCnTextInput } from "@/components/common/shadcnTextInput";

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
      <ShadCnTextInput<SignUpSchemaType> name="email" labelText="Email" placeHolderText="이메일을 입력해주세요" />
    </form>
  );
}
