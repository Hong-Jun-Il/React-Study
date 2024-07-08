import { createContext, useContext, useReducer } from "react";

const initialState = {
    currentUserId: null,
}

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                currentUserId: action.currentUserId
            };
        default:
            throw new Error(`Unhandled Action Type : ${action.type}`);
    }
}

const LoginStateContext = createContext();
const LoginDispatchContext = createContext();

export function LoginProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

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