import { useFormContext } from "react-hook-form";
import { Stack, TextField, Typography } from "@mui/material";
import { SchemaType } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { useEffect } from "react";
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

export default function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();

  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<SchemaType>();

  useEffect(() => {
    const sub = watch((value) => {
      console.log(value);
    });

    return () => sub.unsubscribe();
  }, [watch]);

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutocomplete<SchemaType>
        name="states"
        label="State"
        options={statesQuery.data ?? []}
      />
      <RHFToggleBtnGroup<SchemaType>
        name="laguagesSpoken"
        options={languagesQuery.data}
      />
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
      <input type="submit" />
    </Stack>
  );
}
