import axios, { AxiosError } from "axios"
import { useEffect, useReducer } from "react"

type State = {
    loading: boolean,
    data: null | [],
    error: null | AxiosError
}

type Action = 
| {type: "LOADING"} 
| {type: "SUCCESS", data: []} 
| {type: "ERROR", error: AxiosError}

const initialState: State = {
    loading: true,
    data: null,
    error: null
}

function reducer(state: State, action: Action): State{
    switch(action.type){
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null
            }
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error
            }
        default: 
            throw new Error("Unhandled Action")
    }
}

export const useAsync = (deps: number): [State, () => Promise<void>]=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    async function fetchData(){
        dispatch({
            type: "LOADING"
        })
        
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");

            dispatch({
                type: "SUCCESS",
                data: response.data
            })
        }catch(error: unknown){
            if(axios.isAxiosError(error)){
                dispatch({
                    type: "ERROR",
                    error
                })
            }
            else{
                dispatch({
                    type: "ERROR",
                    error: new AxiosError("Unexpected Error Occurred")
                })
            }
        }
    }

    useEffect(()=>{
        fetchData();
    }, [deps]);

    return [state, fetchData];
}