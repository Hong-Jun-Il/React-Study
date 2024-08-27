import { Controller, useFormContext } from "react-hook-form";

export function MuiTest() {
    const {control} = useFormContext();

    console.log(control);

  return (
    <>
        {/* <Controller control={control} /> */}
    </>
  );
}
