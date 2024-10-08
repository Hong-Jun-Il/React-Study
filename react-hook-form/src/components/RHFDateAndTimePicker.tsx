import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ko } from "date-fns/locale";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export function RHFDateAndTimePicker<T extends FieldValues>({
  name,
  label,
}: PropsType<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
          <DateTimePicker
            value={value}
            label={label}
            {...restField}
            onChange={() => {
              onChange(value);
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
}
