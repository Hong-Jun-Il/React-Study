import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";

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
          <FormGroup>
            {options?.map((option) => (
              <FormControlLabel
                key={option.id}
                control={
                  <Checkbox
                    checked={value.includes(option.id)}
                    onChange={() => {
                      if (value.includes(option.id)) {
                        onChange(
                          (value as string[]).filter(
                            (item) => item !== option.id,
                          ),
                        );
                      } else {
                        onChange([...value, option.id]);
                      }
                    }}
                  />
                }
                label={option?.label}
              />
            ))}
          </FormGroup>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    ></Controller>
  );
}
