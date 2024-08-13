import { useState } from "react"

export const useInput = (input: string) => {
    const [value, setValue] = useState<string>(input);

    const handler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const blank = /\s/;

        if(blank.test(e.target.value)){
            alert("공백은 사용하실 수 없습니다.");
            return;
        }
        
        setValue(e.target.value);
    }

    return [value, handler, setValue] as const;
}