const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const {
  getTodoIds,
  getTodo,
  toggleCompleteTodo,
  createTodo,
  deleteTodo
} = require("./controller");

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/gettodoids", getTodoIds);
app.get("/gettodo", getTodo);
app.put("/updatetodo", toggleCompleteTodo);
app.post("/createtodo", createTodo);
app.delete("/deletetodo", deleteTodo);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
})
