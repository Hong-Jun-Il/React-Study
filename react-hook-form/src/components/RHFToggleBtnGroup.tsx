import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";
import { ToggleButtonGroup } from "@mui/material";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options: OptionType[];
};

export function RHFToggleBtnGroup<T extends FieldValues>({
  name,
  options,
}: PropsType<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <ToggleButtonGroup></ToggleButtonGroup>
      )}
    ></Controller>
  );
}
