import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                data: null,
                loading: true,
                error: null
            };
        case "SUCCESS":
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case "ERROR":
            return {
                data: null,
                loading: false,
                error: action.e
            };
        default:
            throw new Error(`Unhandled Action Type: ${action.type}`);
    }
}

export function useAsync(callback, deps = [], skip = false) {
    const [state, dispatch] = useReducer(reducer, {
        data: null,
        loading: false,
        error: null
    })

    const fetchData = async () => {
        dispatch({
            type: "LOADING",
        })

        try {
            const data = await callback();

            dispatch({
                type: "SUCCESS",
                data
            })
        } catch (e) {
            dispatch({
                type: "ERROR",
                e
            })
        }
    };

    useEffect(() => {
        if(skip){
            return;
        }
        fetchData();
    }, deps);

    return [state, fetchData];
};