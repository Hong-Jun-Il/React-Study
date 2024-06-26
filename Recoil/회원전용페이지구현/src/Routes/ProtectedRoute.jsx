import React from 'react';
import { isLoginSelector } from '../Recoil/TokenAtom';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const ProtectedRoute = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    const currentLocation = useLocation();

    return isLogin ? <Outlet /> : <Navigate to={"/loginpage"} replace state={{redirectedFrom: currentLocation}} />
};

export default ProtectedRoute;