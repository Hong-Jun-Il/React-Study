import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { SchemaType } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";

export default function Users() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SchemaType>();

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<SchemaType> name="states" />
    </Stack>
  );
}
