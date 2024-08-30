import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";
import { FormControl, FormLabel } from "@mui/material";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options?: OptionType[];
  label: string;
};

export function RHFCheckbox<T extends FieldValues>({
  name,
  options,
  label,
}: PropsType<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <FormLabel>{label}</FormLabel>
        </FormControl>
      )}
    ></Controller>
  );
}
