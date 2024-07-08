import React from 'react';
import { useLoginState } from '../../contexts/LoginContext';
import { baseURL } from '../../api/api';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { currentUserId } = useLoginState();

    return (
        currentUserId ? <Outlet /> : <Navigate replace to={"/login"} />
    );
};

export default ProtectedRoute;
