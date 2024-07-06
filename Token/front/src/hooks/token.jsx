import { useState, useEffect, useReducer } from "react";
import { baseURL } from "../api/api";
import { useNavigate } from "react-router-dom";

export const useAccessToken = (deps = []) => {
    const navigate = useNavigate();

    const fetchData = async () => {
        try{
            const response = await baseURL.get("/accesstoken", {
                withCredentials: true
            });

            console.log(response.data)
        }catch(error){
            alert("로그인이 필요합니다.")
            navigate("/");
        }
    }

    useEffect(()=>{
        fetchData();
    }, deps)
};
