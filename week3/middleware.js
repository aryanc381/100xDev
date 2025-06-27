const express = require("express")
app = express()


function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);

    if(username !== "aryan" || password !== "chodi@123") {
        res.status(403).json({
            msg: "Invalid credentials",
        });
    } else {
        next(); // this fucker is doing a threesome with userMiddleware + kidneyMiddleware
    }
}

function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId);
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(404).json({
            msg: kidneyId + " Kidneys not found!",
        });
    } else {
        next();
    }
}

app.get("/kidney-check", userMiddleware, kidneyMiddleware, (req, res) => {
    res.send("Your kidney is good bruther!");
})

app.get("/username-check", userMiddleware, (req, res) => {
    res.send("Username and Password are correct")
})

app.listen (3000, () => {
    console.log("Server is running on PORT 3000")
})