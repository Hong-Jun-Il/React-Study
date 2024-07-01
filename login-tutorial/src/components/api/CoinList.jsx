import React, { useEffect, useReducer, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

function coinReducer(state, action){
    switch(action.type){
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
    }
}

const Users = () => {
    const [state, dispatch] = useReducer(coinReducer, {
        data: null,
        loading: false,
        error: null
    })

    const fetchCoins = async()=>{
        try{
            dispatch({type: "LOADING"});
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1&x_cg_demo_api_key=CG-AYLRnqXGz5a5gaEdoynehsnZ");
            dispatch({
                type: "SUCCESS",
                data: response.data
            })
        }catch(e){
            dispatch({
                type: "ERROR",
                e
            })
        }
    }

    useEffect(()=>{
        fetchCoins();
    }, [])

    if(state.loading){
        return <div>로딩중</div>
    }
    if(!state.data){
        return <div>데이터가 없습니다.</div>
    }
    if(state.error){
        return <div>에러남</div>
    }

    return (
        <StyledCoins>
            {state.data.map(coin=>{
                return <Coin key={coin.id}>
                    <h2>{coin.name}</h2>
                    <span>{coin.current_price}</span>
                </Coin>
            })}
        </StyledCoins>
    );
};

const StyledCoins = styled.ul`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Coin = styled.li`
    border: 1px solid;
    flex: 1;
    text-align: center;
    font-size: 3rem;
`;

export default Users;