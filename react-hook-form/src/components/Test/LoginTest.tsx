import { useFormContext } from "react-hook-form";
import { SchemaType } from "./schema";
import { TextField } from "@mui/material";

export function LoginTest() {
  const { register, handleSubmit } = useFormContext<SchemaType>();

  const onSubmit = (data: SchemaType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("id")} label="아이디" />
      <TextField {...register("pw")} label="비밀번호" />
      <input type="submit" />
    </form>
  );
}
