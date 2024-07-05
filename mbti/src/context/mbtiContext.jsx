import { createContext, useContext, useReducer } from "react";

const initialState = {
    num: 1,
    score: {
        EI: 0,
        SN: 0,
        TF: 0,
        PJ: 0,
    }
}

function mbtiReducer(state, action) {
    switch (action.type) {
        case "SET_CURRENT_QUESTION":
            return {
                ...state,
                num: (state.num) + 1
            };
        case "SET_SCORE":
            return {
                ...state,
                score: {
                    ...state.score,
                    [action.mbtiType]: state.score[action.mbtiType] + action.value
                }
            };
        case "RESET_SCORE":
            return {
                num: 1,
                score: {
                    EI: 0,
                    SN: 0,
                    TF: 0,
                    PJ: 0,
                }
            };
        default:
            throw new Error(`Unhandled Action Type : ${action.type}`);
    }
}

const MbtiStateContext = createContext();
const MbtiDispatchContext = createContext();

export function MbtiProvider({ children }) {
    const [state, dispatch] = useReducer(mbtiReducer, initialState);

    return (
        <MbtiStateContext.Provider value={state}>
            <MbtiDispatchContext.Provider value={dispatch}>
                {children}
            </MbtiDispatchContext.Provider>
        </MbtiStateContext.Provider>
    )
}

export function useMbtiState(){
    const context = useContext(MbtiStateContext);
    
    if(!context){
        throw new Error("state가 없음");
    }
    
    return context;
}

export function useMbtiDispatch(){
    const context = useContext(MbtiDispatchContext);
    
    if(!context){
        throw new Error("dispatch가 없음");
    }
    
    return context;
}