import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Button, Stack, Typography } from "@mui/material";
import { SchemaType } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { Fragment, useEffect } from "react";
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
} from "../services/queries";
import { RHFToggleBtnGroup } from "../../components/RHFToggleBtnGroup";
import { RHFRadioGroup } from "../../components/RHFRadioGroup";
import { RHFCheckbox } from "../../components/RHFCheckBox";
import { RHFDateAndTimePicker } from "../../components/RHFDateAndTimePicker";
import { RHFDateRangePicker } from "../../components/RHFDateRangePicker";
import { RHFSlider } from "../../components/RHFSlider";
import { RHFSwitch } from "../../components/RHFSwitch";
import { RHFTextField } from "../../components/RHFTextField";

export default function Users() {
  console.log("리렌더링됨");
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();
  const { control, watch, unregister } = useFormContext<SchemaType>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  const isTeacher = useWatch({ control, name: "isTeacher" });

  const { append, fields, remove, replace } = useFieldArray({
    control,
    name: "students",
  });

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
      unregister("students");
    }
  }, [isTeacher, replace, unregister]);

  return (
    <Stack sx={{ gap: 2 }}>
      <RHFTextField<SchemaType> name="email" label="Email" />
      <RHFTextField<SchemaType> name="name" label="Name" />
      <RHFAutocomplete<SchemaType>
        name="states"
        label="State"
        options={statesQuery.data ?? []}
      />
      {/* <RHFToggleBtnGroup<SchemaType>
        name="laguagesSpoken"
        options={languagesQuery.data}
      /> */}
      <RHFRadioGroup<SchemaType>
        name="gender"
        label="Genders"
        options={gendersQuery.data}
      />
      <RHFCheckbox<SchemaType>
        name="skills"
        label="Skills"
        options={skillsQuery.data}
      />
      <RHFDateAndTimePicker
        name="registrationDateAndTime"
        label="Registration Date & Time"
      />
      <Typography>Formet Employment Period:</Typography>
      <RHFDateRangePicker<SchemaType> name="formetEmploymentPeriod" />
      <RHFSlider<SchemaType> name="salaryRange" label="Salary Range" />
      <RHFSwitch<SchemaType> name="isTeacher" label="Are you a teacher?" />
      {isTeacher && (
        <Button onClick={() => append({ name: "" })} type="button">
          Add new student
        </Button>
      )}

      {fields.map((field, i) => (
        <Fragment key={field.id}>
          <RHFTextField<SchemaType> name={`students.${i}.name`} label="Name" />
          <Button color="error" onClick={() => remove(i)} type="button">
            Remove
          </Button>
        </Fragment>
      ))}
      <input type="submit" />
    </Stack>
  );
}
