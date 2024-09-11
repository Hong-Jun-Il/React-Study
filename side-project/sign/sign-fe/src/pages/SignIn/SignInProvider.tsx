import { SignInDefaultValues, SignInSchema, SignInSchemaType } from "@/types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import SignIn from "./SignIn";

export function SignInProvider(){
    const methods = useForm<SignInSchemaType>({
        mode: "all",
        resolver: zodResolver(SignInSchema),
        defaultValues: SignInDefaultValues
    })

    return (
        <FormProvider {...methods}>
            <SignIn />
        </FormProvider>
    )
}