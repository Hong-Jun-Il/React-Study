import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { calcTotal, fetchUsers } from '../features/usersSlice';

const Users = () => {
    const { users, isLoading, error, total } = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calcTotal());
    }, [users]);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    return (
        <UsersSection>
            {isLoading && (
                <div className='loading'>로딩중...</div>
            )}
            {!isLoading && (
                <>
                    <header>총 {total}명</header>
                    <ul>
                        {users.map(user => {
                            return (<li key={user.id}>
                                <h2>{user.name}({user.username})</h2>
                            </li>
                            )
                        })}
                    </ul>
                </>
            )}
        </UsersSection>
    );
};

const UsersSection = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    .loading{
        font-size: 5rem;
        
    }

    header{
        font-size: 5rem;
        margin-bottom: 20px;
    }

    ul{
        width: 45vw;
        height: 100%;
        display: flex;
        flex-direction: column;

        li{
            width: 100%;
            font-size: 3rem;
            margin-bottom: 10px;
        }
    }
`;

export default Users;