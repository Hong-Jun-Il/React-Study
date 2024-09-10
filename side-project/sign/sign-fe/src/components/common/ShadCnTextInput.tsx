import { FieldValues, Path, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type PropsType<T extends FieldValues> = {
    name: Path<T>;
    labelText: string;
    placeHolderText: string;
}

export function ShadCnTextInput<T extends FieldValues>({name, labelText, placeHolderText}: PropsType<T>){
    const {control} = useFormContext<T>();
    return (
        <FormField 
        control={control}
        name={name}
        render={({field, fieldState: {error}})=>(
            <FormItem>
                <FormLabel className="text-3xl pl-1">{labelText}</FormLabel>
                <FormControl>
                    <Input className="text-3xl" placeholder={placeHolderText} {...field} />
                </FormControl>
                <FormMessage className="text-3xl" />
            </FormItem>
        )}/>
    )
}