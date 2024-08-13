const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {
    getTodos
} = require("./controller");

const app = express();
dotenv.config();

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

app.get("/todos", getTodos);

app.listen(process.env.PORT, () => {
    console.log(`server is on ${process.env.PORT}`);
})
