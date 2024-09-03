import {
  SubmitHandler,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import { defaultValues, SchemaType } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";
import { Fragment, useEffect } from "react";
import {
  useGenders,
  useLanguages,
  useSkills,
  useStates,
  useUser,
  useUsers,
} from "../services/queries";
import { RHFToggleBtnGroup } from "../../components/RHFToggleBtnGroup";
import { RHFRadioGroup } from "../../components/RHFRadioGroup";
import { RHFCheckbox } from "../../components/RHFCheckBox";
import { RHFDateAndTimePicker } from "../../components/RHFDateAndTimePicker";
import { RHFDateRangePicker } from "../../components/RHFDateRangePicker";
import { RHFSlider } from "../../components/RHFSlider";
import { RHFSwitch } from "../../components/RHFSwitch";
import { RHFTextField } from "../../components/RHFTextField";
import { useCreateUser } from "../services/mutations";

export default function Users() {
  const statesQuery = useStates();
  const languagesQuery = useLanguages();
  const gendersQuery = useGenders();
  const skillsQuery = useSkills();
  const usersQuery = useUsers();

  const { control, watch, unregister, reset, setValue, handleSubmit } =
    useFormContext<SchemaType>();

  const id = useWatch({ control, name: "id" });
  const variant = useWatch({ control, name: "variant" });

  const userQuery = useUser(id);

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

  const handleUserClick = (id: string) => {
    setValue("id", id);
  };

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
      unregister("students");
    }
  }, [isTeacher, replace, unregister]);

  useEffect(() => {
    if (userQuery.data) {
      reset(userQuery.data);
    }
  }, [userQuery.data, reset]);

  const handleReset = () => {
    reset(defaultValues);
  };

  const createUserMutation = useCreateUser();

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    if (variant === "create") {
      createUserMutation.mutate(data);
    } else {
    }
  };

  return (
    <Container maxWidth="sm" component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ flexDirection: "row", gap: 2 }}>
        <List
          subheader={
            <ListSubheader sx={{ backgroundColor: "aliceblue" }}>
              Users
            </ListSubheader>
          }
        >
          {usersQuery.data?.map((user) => (
            <ListItem disablePadding key={user.id}>
              <ListItemButton
                onClick={() => handleUserClick(user.id)}
                selected={id === user.id}
                key={user.id}
              >
                <ListItemText primary={user.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Stack>
          <Stack sx={{ gap: 2 }}>
            <RHFTextField<SchemaType> name="email" label="Email" />
            <RHFTextField<SchemaType> name="name" label="Name" />
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
            <RHFSwitch<SchemaType>
              name="isTeacher"
              label="Are you a teacher?"
            />
            {isTeacher && (
              <Button onClick={() => append({ name: "" })} type="button">
                Add new student
              </Button>
            )}

            {fields.map((field, i) => (
              <Fragment key={field.id}>
                <RHFTextField<SchemaType>
                  name={`students.${i}.name`}
                  label="Name"
                />
                <Button color="error" onClick={() => remove(i)} type="button">
                  Remove
                </Button>
              </Fragment>
            ))}
          </Stack>

          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button type="submit">New User</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Stack>
        </Stack>
      </Stack>
      <input type="submit" />
    </Container>
  );
}
