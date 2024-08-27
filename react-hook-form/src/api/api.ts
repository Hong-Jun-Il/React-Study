import axios from "axios";

export const BASE_URL = "http://localhost:8123";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});