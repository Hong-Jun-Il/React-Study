import { createContext, useContext, useEffect, useReducer } from "react";
import { baseURL } from "../api/api";

const initialState = {
    currentUser: null
}

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                currentUser: action.currentUser
            };
        default:
            throw new Error(`Unhandled Action Type : ${action.type}`);
    }
}

const LoginStateContext = createContext();
const LoginDispatchContext = createContext();

export function LoginProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await baseURL.get("/accesstoken", {
                    withCredentials: true
                });
                dispatch({
                    type: "LOGIN",
                    currentUser: response.data
                });
                
            } catch (e) {
                console.log(e);
            }
        };
    
        fetchData();
    }, []);

    return (
        <LoginStateContext.Provider value={state}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginStateContext.Provider>
    )
}

export function useLoginState() {
    const context = useContext(LoginStateContext);

    if (!context) {
        throw new Error("state context가 존재하지 않습니다.");
    }

    return context;
}

export function useLoginDispatch() {
    const context = useContext(LoginDispatchContext);

    if (!context) {
        throw new Error("dispatch context가 존재하지 않습니다.");
    }

    return context;
}