import React, { useEffect, useReducer, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useAsync } from '../../hooks/useAsync';
import { getUsers, useUsersDispatch, useUsersState } from '../../contexts/UsersContext';
import User from "./User";

const Users = () => {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const fetchUsers = ()=>{
        getUsers(dispatch);
    }

    return (
            <StyledDataList>
                {!state.users.data && !state.users.loading && (
                    <button onClick={fetchUsers}>불러오기</button>
                )}
                {state.users.loading && (
                    <Loading>로딩중</Loading>
                )}
                {state.users.data && (
                    <DataListWrapper>
                        {state.users.data.map(user=>{
                            return <Data onClick={()=>{
                                setUserId(user.id);
                            }} key={user.id}>
                                <h2>{user.name}</h2>
                            </Data>
                        })}
                    </DataListWrapper>
                )}
                {userId && <User id = {userId} />}
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