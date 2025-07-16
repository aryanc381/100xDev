const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username: "aryanChauhan",
        password: "123",
        name: "Aryan Chauhan"   
    },
    {
        username: "akshitaJain",
        password: "345",
        name: "Akshita Jain"
    },
    {
        username: "jayrajLadkat",
        password: "678",
        name: "Jayraj Ladkat"
    }
];

function userExists(username, password) {
    for(let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            return true;
        }
    }
    return false;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db."
        });
    }

    var token = jwt.sign({ username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.veriy(token, jwtPassword);
        const username = decoded.username;
    } catch(err) {
        return res.status(403).json({
            msg : "Invalid token",
        });
    }
});

app.listen(3000, () => {
    console.log("App is listening at PORT 3000");
})