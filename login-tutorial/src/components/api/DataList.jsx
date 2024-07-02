import React, { useEffect, useReducer, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useAsync } from '../../hooks/useAsync';
import { gsap } from "gsap";
import DataItem from './DataItem';

async function getUsers() {
    // const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1&x_cg_demo_api_key=CG-AYLRnqXGz5a5gaEdoynehsnZ");
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    return response.data;
}

const Users = () => {
    const [state, refetch] = useAsync(getUsers, [], true);
    const [userId, setUserId] = useState(null);

    return (
        <StyledDataList>
            {!state.data && !state.loading && (
                <button onClick={refetch}>불러오기</button>
            )}
            {state.loading && (
                <Loading>로딩중</Loading>
            )}
            {state.data && (
                <>
                    <DataListWrapper>
                        {state.data.map(data => {
                            return <Data key={data.id} onClick={() => {
                                setUserId(data.id);
                            }}>
                                <h2>{data.name}</h2>
                            </Data>
                        })}
                    </DataListWrapper>
                    <button onClick={refetch}>다시 불러오기</button>
                </>
            )}
            {userId && <DataItem id={userId} />}
        </StyledDataList>
    );
};

const StyledDataList = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: #fff5e6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Loading = styled.section`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    background-color: #b36b00;
`;

const DataListWrapper = styled.ul`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* margin: 0 auto; */
`;

const Data = styled.li`
    font-size: 3rem;
    border: 1px solid;
    cursor: pointer;
`;

export default Users;