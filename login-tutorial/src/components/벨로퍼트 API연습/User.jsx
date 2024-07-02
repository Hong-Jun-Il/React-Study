import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAsync } from '../../hooks/useAsync';
import axios from 'axios';
import { getUser, useUsersDispatch, useUsersState } from '../../contexts/UsersContext';

const User = ({id}) => {
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    useEffect(()=>{
        getUser(dispatch, id);
    }, [dispatch, id])

    return (
        <StyledData>
            {state.user.loading && (
                <>로딩중...</>
            )}
            {state.user.data && (
                <>
                <h2>{state.user.data.username}</h2>
                <span>{state.user.data.email}</span>
                </>
            )}
        </StyledData>
    );
};

const StyledData = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 3rem;
    color: red;
`;

export default User;