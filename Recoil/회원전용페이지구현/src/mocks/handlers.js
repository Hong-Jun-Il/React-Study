import { http, HttpResponse } from "msw";

const todos = ["먹기", "자기", "놀기"];

export const handlers = [
  http.post("/login", async({request})=>{
    const requestBody = await request.json();
    const parsed = JSON.parsed(requestBody);
    console.log(parsed);
    
    return HttpResponse.json({
      content: requestBody.content,
      createdAt: new Date().toLocaleString()
    }, {status: 201})
  })
];