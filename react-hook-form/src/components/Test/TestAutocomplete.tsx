import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

type OptionType = {
  id: string;
  test: string;
};

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  options: OptionType[];
  label: string;
};

export function TestAutocomplete<T extends FieldValues>({
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
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.test}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      )}
    />
  );
}
