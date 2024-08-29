import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options?: OptionType[];
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
      render={({ field: { value, onChange, ...restField } }) => (
        <ToggleButtonGroup
          onChange={(_, newValue) => {
            if (newValue.length) {
              onChange(newValue);
            }
          }}
          value={value.length ? value : [options?.[0].id]}
          {...restField}
        >
          {options?.map((option) => (
            <ToggleButton value={option.id} key={option.id}>
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )}
    ></Controller>
  );
}
