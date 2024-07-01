import React from 'react';
import { useInput } from '../../hooks/useInput';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { authService } from '../../firebase';

const SignUp = () => {
    const [email, onChangeEmail, setEmail] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");

    const onSubmit = async()=>{
        try{
            // const data = await createUserWithEmailAndPassword(authService, email, pw);
            // console.log(data);
        }catch(e){
            console.log(e.message);
        }
    }

    return (
        <div>
            <input type="text" value={email} onChange={onChangeEmail} />
            <input type="password" value={pw} onChange={onChangePw} />
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default SignUp;