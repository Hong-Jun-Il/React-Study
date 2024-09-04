import { ApiCommon, ApiCreateEdit } from "../users/types/apiTypes";
import { SchemaType } from "../users/types/schema";

export function mapData(data: SchemaType): ApiCreateEdit {
  const common: ApiCommon = {
    email: data.email,
    name: data.name,
    states: data.states,
    gender: data.gender,
    languagesSpoken: data.laguagesSpoken,
    skills: data.skills,
    registrationDateAndTime: data.registrationDateAndTime.toString(),
    formetEmploymentPeriod: [
      data.formetEmploymentPeriod[0].toString(),
      data.formetEmploymentPeriod[1].toString(),
    ],
    salaryRange: [data.salaryRange[0], data.salaryRange[1]],
    isTeacher: data.isTeacher,
    students: data.isTeacher ? data.students : [],
  };

  switch (data.variant) {
    case "create": {
      return {
        ...common,
        variant: data.variant,
      };
    }
    case "edit": {
      return {
        ...common,
        variant: data.variant,
        id: Number(data.id),
      };
    }
  }
}
