import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";
import { SchemaType } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { useEffect } from "react";
import { useLanguages, useStates } from "../services/queries";
import { RHFToggleBtnGroup } from "../../components/RHFToggleBtnGroup";

export default function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<SchemaType>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

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
      <RHFAutocomplete<SchemaType>
        name="states"
        label="State"
        options={statesQuery.data ?? []}
      />
      <RHFToggleBtnGroup<SchemaType>
        name="laguagesSpoken"
        options={languagesQuery.data}
      />
      
    </Stack>
  );
}
