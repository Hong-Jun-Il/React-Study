import { ShadCnTextInput } from "@/components/common/ShadCnTextInput";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/mutations";
import { SignInSchemaType } from "@/types/schema";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

export default function SignIn() {
  const { handleSubmit } = useFormContext<SignInSchemaType>();

  const signInmutation = useLogin();

  const onLogin = (data: SignInSchemaType) => {
    signInmutation.mutate(data);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <form className="space-y-8" onSubmit={handleSubmit(onLogin)}>
        <ShadCnTextInput<SignInSchemaType> name="id" placeHolderText="Id" />
        <ShadCnTextInput<SignInSchemaType>
          name="pw"
          placeHolderText="Password"
        />
        <Button type="submit">로그인</Button>
      </form>
      <Link to="/signup" className="bg-lime-200">
        회원가입하기
      </Link>
    </section>
  );
}
