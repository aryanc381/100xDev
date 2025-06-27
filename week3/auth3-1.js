// dumbass way of doing input validation and auth
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    // do health check s here
    const kidneyId = parseInt(req.query.kidneyId);
    const username = req.headers.username;
    const password = req.headers.password;

    if(kidneyId != 1 && kidneyId !=2 ) { // input validation
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }

    if(username === "aryan" && password === "chodi@123") {
        res.status(200).json({
            msg: "You exist in the dbms!"
        });
        return;
    }

    if(username != "aryan" || password != "Venom@54321") { // username check
        res.status(403).json({
            msg: "User does not exist!",
        });
        return;
    }

    res.send("You kidney is healthy!");
});

app.listen(3000);