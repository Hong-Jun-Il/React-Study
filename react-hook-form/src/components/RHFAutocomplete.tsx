import { Autocomplete } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options: OptionType[];
};

export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
}: PropsType<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={(params) => <Autocomplete />}
    />
  );
}
