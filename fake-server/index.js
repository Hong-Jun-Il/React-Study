const express = require("express");
const dotenv = require("dotenv");
const {
    getTodos
} = require("./controller");

const app = express();

app.use(express.json());
dotenv.config();

app.get("/todos", getTodos);

app.listen(process.env.PORT, () => {
    console.log(`server is on ${process.env.PORT}`);
})
