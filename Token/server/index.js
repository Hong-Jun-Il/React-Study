const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
  getUsers
} = require("./controller");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.post("/login", login);
app.get("/accesstoken", accessToken);
app.get("/refreshtoken", refreshToken);
app.get("/login/success", loginSuccess);
app.post("/logout", logout);
app.get("/users", getUsers);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});