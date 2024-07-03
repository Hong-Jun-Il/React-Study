import { createContext, useContext, useReducer } from "react"
import axios from "../api/axios"

const initialState = {
    users: {
        loading: false,
        data: null,
        error: null
    },
    user: {
        loading: false,
        data: null,
        error: null
    }
}

const loadingState = () => {
    return {
        loading: true,
        data: null,
        error: null
    }
}

const success = data => {
    return {
        loading: false,
        data,
        error: null
    }
}

const error = error => {
    return {
        loading: false,
        data: null,
        error
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "GET_USERS_LOADING":
            return {
                ...state,
                users: loadingState()
            }
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                users: success(action.data)
            }
        case "GET_USERS_ERROR":
            return {
                ...state,
                users: error(action.error)
            }
        case "GET_USER_LOADING":
            return {
                ...state,
                user: loadingState()
            }
        case "GET_USER_SUCCESS":
            return {
                ...state,
                user: success(action.data)
            }
        case "GET_USER_ERROR":
            return {
                ...state,
                user: error(action.error)
            }
        default:
            throw new error(`Unhandled Action Type: ${action.type}`);
    }
}

const UsersStateContext = createContext();
const UsersDispatchContext = createContext();

export function UsersProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UsersStateContext.Provider value={state}>
            <UsersDispatchContext.Provider value={dispatch}>
                {children}
            </UsersDispatchContext.Provider>
        </UsersStateContext.Provider>
    )
}

export function useUsersState(){
    const context = useContext(UsersStateContext);

    if(!context){
        throw new Error("users state를 찾을 수 없습니다");
    }

    return context;
}

export function useUsersDispatch(){
    const context = useContext(UsersDispatchContext);

    if(!context){
        throw new Error("users dispatch를 찾을 수 없습니다");
    }

    return context;
}

export async function getUsers(dispatch){
    dispatch({
        type: "GET_USERS_LOADING"
    })
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        dispatch({
            type: "GET_USERS_SUCCESS",
            data: response.data
        })
    }catch(e){
        dispatch({
            type: "GET_USERS_ERROR",
            error: e
        })
    }
}

export async function getUser(dispatch, id){
    dispatch({
        type: "GET_USER_LOADING"
    })
    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({
            type: "GET_USER_SUCCESS",
            data: response.data
        })
    }catch(e){
        dispatch({
            type: "GET_USER_ERROR",
            error: e
        })
    }
}