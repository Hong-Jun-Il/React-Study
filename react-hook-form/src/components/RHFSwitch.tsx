import { FormControlLabel } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import Switch from "@mui/material/Switch";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export function RHFSwitch<T extends FieldValues>({
  name,
  label,
}: PropsType<T>) {
  const { control } = useFormContext<T>();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch {...field} checked={field.value} />}
          label={label}
        />
      )}
    />
  );
}
