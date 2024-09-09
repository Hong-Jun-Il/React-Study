import { useFormContext } from "react-hook-form";
import { SignUpSchemaType } from "../../types/schema";
import { useEffect } from "react";
import { useCreateUser } from "../../hooks/mutations";

export default function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useFormContext<SignUpSchemaType>();

  const createUserMutation = useCreateUser();

  const onSubmit = (data: SignUpSchemaType)=>{
    console.log(data);
    createUserMutation.mutate(data);
  }

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <form className="flex flex-col text-2xl" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("email")}
        className="border border-red-500"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input
        type="text"
        {...register("nickname")}
        className="border border-red-500"
      />
      {errors.nickname && <p>{errors.nickname.message}</p>}
      <input
        type="text"
        {...register("id")}
        className="border border-red-500"
      />
      {errors.id && <p>{errors.id.message}</p>}
      <input
        type="text"
        {...register("pw")}
        className="border border-red-500"
      />
      {errors.pw && <p>{errors.pw.message}</p>}
      <input
        type="text"
        {...register("pwCheck")}
        className="border border-red-500"
      />
      {errors.pwCheck && <p>{errors.pwCheck.message}</p>}
      <input type="submit" />
    </form>
  );
}
