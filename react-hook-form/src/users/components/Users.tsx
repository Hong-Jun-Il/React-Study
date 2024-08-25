import { useForm } from "react-hook-form";
import { Stack, TextField, Autocomplete } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, SchemaType } from "../types/schema";

export default function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<SchemaType>({
    mode: "all",
    resolver: zodResolver(schema),
  });

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
      <Autocomplete
        options={[{ id: 1, label: "Texas" }]}
        renderInput={(params) => <TextField {...params} label="states" />}
      />
    </Stack>
  );
}
