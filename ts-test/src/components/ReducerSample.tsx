import React, { useReducer } from 'react';
import styled from 'styled-components';

type Color = "red" | "blue" | "yellow"

type State = {
    text: string,
    count: number,
    isGood: boolean,
    color: Color
};

type Action = 
| {type: "INCREASE"}
| {type: "DECREASE"}
| {type: "SET_TEXT", text: string}
| {type: "SET_COLOR", color: Color}
| {type: "TOGGLE_GOOD"};

function reducer(state: State, action: Action){
    switch(action.type){
        case "INCREASE":
            return{
                ...state,
                count: state.count+=1
            }
        case "DECREASE":
            return {
                ...state,
                count: state.count -= 1
            }
        case "SET_TEXT":
            return {
                ...state,
                text: action.text
            }
        case "SET_COLOR":
            return {
                ...state,
                color: action.color
            }
        case "TOGGLE_GOOD":
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error("Unhandled Action");
    }
}

const ReducerSample = () => {
    const [state, dispatch] = useReducer(reducer, {
        text:"텍스트",
        count: 0,
        isGood: false,
        color: "red"
    })

    return (
        <StyledReducerSample>
            <p onClick={()=>{
                dispatch({
                    type: "SET_TEXT",
                    text: "qwadasdasdsa"
                })
            }}>{state.text}</p>
            <div>
                <button onClick={()=>dispatch({
                    type: "INCREASE"
                })}>증가</button>
                <p>{state.count}</p>
                <button onClick={()=>{
                    dispatch({
                        type: "DECREASE"
                    })
                }}>감소</button>
            </div>
            <p onClick={()=>{
                dispatch({
                    type: "TOGGLE_GOOD"
                })
            }}>{state.isGood.toString()}</p>
            <p onClick={()=>{
                dispatch({
                    type: "SET_COLOR",
                    color: "blue"
                })
            }}>{state.color}</p>
        </StyledReducerSample>
    );
};

const StyledReducerSample = styled.div`
    display: flex;
    flex-direction: column;
`

export default ReducerSample;