const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "chodi@123";

const app = express();

const ALL_USERS = [
    {
        username: "work@aryancodes.dev",
        password: "Chodi",
        name: "Aryan Chauhan",
    },
    {
        username: "work@jayrajkl.com",
        password: "JL@123",
        name: "Jayraj Ladkat",
    },
    {
        username: "work@akshitadesigns.in",
        password: "akshita",
        name: "Akshita Jain",
    },
];

function userExists(username, password) {
    let userExists = false;
    for(let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
        }
    }
    return userExists; 
}

app.use(express.json());

app.post("/signin", (req, res) => {
    let username = req.body.username;
    console.log(username);
    let password = req.body.password;
    console.log(password);

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User does not exist in the memory db",
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", (req, res) => {
    let token = req.headers.authorization;
    console.log(token);
    try {
        let decoded = jwt.verify(token, jwtPassword);
        let username = decoded.username;
        res.json({
            users: ALL_USERS.filter(function(value) {
                if(value.username == username) {
                    return false
                } else {
                    return true;
                }
            })
        })
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000, () => {
    console.log("App is listening to Port 3000")
})