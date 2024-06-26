import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/login", async({request})=>{
    const requestBody = await request.json();
    
    return HttpResponse.json({
      // content: requestBody.content,
      // createdAt: new Date().toLocaleString(),
      accessToken: "오늘도 여러분과 함께 성장하는 잡캐헨리입니다",
    }, {status: 201})
  })
];