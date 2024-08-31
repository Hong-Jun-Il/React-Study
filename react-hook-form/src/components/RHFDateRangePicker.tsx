import { LocalizationProvider } from "@mui/x-date-pickers";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { ko } from "date-fns/locale";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

type PropsType<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFDateRangePicker<T extends FieldValues>({
  name,
}: PropsType<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, ...restField } }) => (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ko}>
          <DateRangePicker
            {...restField}
            value={Array.isArray(value) ? value : [null, null]}
          />
        </LocalizationProvider>
      )}
    />
  );
}
