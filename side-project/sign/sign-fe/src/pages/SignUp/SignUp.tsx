import { useFormContext } from "react-hook-form";
import { SignUpSchemaType } from "../../types/schema";
import { useEffect } from "react";
import { useCreateUser } from "../../hooks/mutations";
import { ShadCnTextInput } from "@/components/common/ShadCnTextInput";
import { Button } from "@/components/ui/button";
import { useGetUser } from "@/hooks/queries";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { handleSubmit, watch } = useFormContext<SignUpSchemaType>();
  const navigate = useNavigate();

  // const getUserQuery = useGetUser();
  const createUserMutation = useCreateUser();

  const onSubmit = (data: SignUpSchemaType) => {
    createUserMutation.mutate(data);
  };

  // useEffect(() => {
  //   const sub = watch((value) => {
  //     console.log(value);
  //   });

  //   return () => sub.unsubscribe();
  // }, [watch]);

  return (
    <section className="flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <ShadCnTextInput<SignUpSchemaType>
          name="email"
          labelText="Email"
          placeHolderText="이메일을 입력해주세요"
        />
        <ShadCnTextInput<SignUpSchemaType>
          name="nickname"
          labelText="Nickname"
          placeHolderText="닉네임을 입력해주세요"
        />
        <ShadCnTextInput<SignUpSchemaType>
          name="id"
          labelText="Id"
          placeHolderText="아이디를 입력해주세요"
        />
        <ShadCnTextInput<SignUpSchemaType>
          name="pw"
          labelText="Password"
          placeHolderText="비밀번호를 입력해주세요"
        />
        <ShadCnTextInput<SignUpSchemaType>
          name="pwCheck"
          labelText="Match Password"
          placeHolderText="비밀번호 확인"
        />
        <Button type="submit" className="text-2xl">
          회원가입
        </Button>
      </form>
    </section>
  );
}
