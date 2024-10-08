import axios from "axios";

export default async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("에러!");
  }
}