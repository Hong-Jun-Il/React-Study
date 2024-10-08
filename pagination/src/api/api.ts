import axios from "axios";
import { PostType } from "../types/postsType";

const BASE_URL = "http://localhost:8123";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export async function getPosts(page: number) {
  try {
    const response = await axiosInstance.get(
      `${BASE_URL}/api/getPosts?page=${page}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("HTTP ERROR");
  }
}
