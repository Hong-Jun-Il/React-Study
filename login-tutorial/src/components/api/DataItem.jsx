import React from 'react';
import styled from 'styled-components';
import { useAsync } from '../../hooks/useAsync';
import axios from 'axios';

async function getUser(id){
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    return response.data;
}

const DataItem = ({id}) => {
    const [state] = useAsync(()=>getUser(id), [id]);
    
    return (
        <StyledData>
            {state.loading && (
                <>로딩중</>
            )}
            {state.data && (
                <>
                <h2>{state.data.username}</h2>
                <div>{state.data.email}</div>
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

export default DataItem;