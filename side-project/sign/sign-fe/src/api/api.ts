import axios from "axios";

const BASE_URL = "http://localhost:3000/sign";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})