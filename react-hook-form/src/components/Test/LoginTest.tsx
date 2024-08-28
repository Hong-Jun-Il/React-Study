import { Controller, useFormContext } from "react-hook-form";
import { SchemaType } from "./schema";
import { TextField } from "@mui/material";
import { TestAutocomplete } from "./TestAutocomplete";

export function LoginTest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<SchemaType>();

  const onSubmit = (data: SchemaType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("id")}
        label="아이디"
        error={!!errors.id}
        helperText={errors.id?.message}
      />
      <TextField
        {...register("pw")}
        label="비밀번호"
        error={!!errors.pw}
        helperText={errors.pw?.message}
      />
      <TestAutocomplete<SchemaType>
        name="test"
        label="Test"
        options={[
          { id: "1", test: "test1" },
          { id: "2", test: "test2" },
          { id: "3", test: "test3" },
          { id: "4", test: "test4" },
        ]}
      />
      <input type="submit" />
    </form>
  );
}
