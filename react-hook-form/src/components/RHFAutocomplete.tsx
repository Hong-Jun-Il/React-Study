import { Autocomplete, TextField } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { OptionType } from "../users/types/option";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options: OptionType[];
  label: string;
};

export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
  label,
}: PropsType<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id),
          )}
          getOptionLabel={(option) =>
            options.find((item) => item.id === option.id)?.label ?? ""
          }
          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
            />
          )}
        />
      )}
    />
  );
}
