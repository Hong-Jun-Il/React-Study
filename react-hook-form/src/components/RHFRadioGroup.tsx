import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options?: OptionType[];
  label: string;
};

export function RHFRadioGroup<T extends FieldValues>({
  name,
  options,
  label,
}: PropsType<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl {...field} error={!!error}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup>
            {options?.map((option) => (
              <FormControlLabel
                value={option.id}
                control={<Radio checked={field.value === option.id} />}
                label={option.label}
                key={option.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    ></Controller>
  );
}
