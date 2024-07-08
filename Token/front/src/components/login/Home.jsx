import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { baseURL } from '../../api/api';
import { useAsync } from '../../hooks/useAsync';
import Loading from './Loading';

const Home = () => {
    const getUsers = async()=>{
        const response = await baseURL.get("/users");

        return response.data;
    }

    const [state, refetch] = useAsync(getUsers, []);

    const {data: users, loading, error} = state;

    return (
        <HomeWrapper>
            {loading && !users &&(
                <Loading />
            )}
            {users?.map(user=>{
                return <li key={user.id}>
                    {user.nickname}
                </li>
            })}
        </HomeWrapper>
    );
};

const HomeWrapper = styled.ul`
    display: grid;
    width: 80%;
    min-height: 100vh;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 7rem;

    li{
        border: 1px solid #7869ca;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Home;