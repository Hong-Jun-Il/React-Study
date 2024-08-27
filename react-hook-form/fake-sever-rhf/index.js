const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { getStates } = require("./controller");

const app = express();
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/getstates", getStates);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
