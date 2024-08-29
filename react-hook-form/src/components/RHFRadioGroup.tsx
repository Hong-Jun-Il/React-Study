import { Controller, FieldValues, Path, useFormContext } from "react-hook-form"
import { OptionType } from "../users/types/option";
import { FormControl, FormLabel, RadioGroup } from "@mui/material";

type PropsType<T extends FieldValues> = {
    name: Path<T>;
    options: OptionType[];
    label: string;
}

export function RHFRadioGroup<T extends FieldValues>({name, options, label}: PropsType<T>){
    const {control} = useFormContext();

    return (
        <Controller name={name} control={control} render={({field, fieldState: {error}})=>(
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <RadioGroup>
                    
                </RadioGroup>
            </FormControl>
        )}> 

        </Controller>
    )
}