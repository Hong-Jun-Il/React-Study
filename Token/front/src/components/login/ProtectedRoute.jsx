import React, { useState } from 'react';
import { useLoginState } from '../../contexts/LoginContext';
import { baseURL } from '../../api/api';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const {currentUserId} = useLoginState();
    const isLogin = async() => {
        try{
            const response = await baseURL.get("/login/success", {
                withCredentials: true
            })

              console.log(response.data);
        }catch(e){
            console.log(e);
        }
    }

    useState(()=>{
        isLogin();
    }, [])
    
    return (
        currentUserId ? <Outlet /> : <Navigate to={"/signup"} />
    );
};

export default ProtectedRoute;