import express = require("express");
import cookieParser = require("cookie-parser");
import cors = require("cors");
import jwt = require("jsonwebtoken");
type JwtPayload = import("jsonwebtoken").JwtPayload;

import path = require('path');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const token = jwt.sign({ id: 1}, "secret");
    // here i am passing the token as the cookie
    // this token will be stored in the cookie and be used by jwt for automatic login/signin
    res.cookie("token", token); 
    res.json({ msg: "Login successfull!" });
});

app.get('/user', async (req, res) => {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, "secret") as JwtPayload;
    res.send({ userId: decoded.id });
});

app.post('/logout', async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // set to true only on https
    maxAge: 0
  });

  res.send('You have been logged out!');
});

app.listen(3000, () => { console.log('App is listening at PORT 3000.') })