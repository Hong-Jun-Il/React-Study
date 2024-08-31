import { Slider, Typography } from "@mui/material";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export function RHFSlider<T extends FieldValues>({
  name,
  label,
}: PropsType<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <Typography>{label}</Typography>
          <Slider valueLabelDisplay="auto" min={0} max={2000} {...field} />
        </>
      )}
    />
  );
}
