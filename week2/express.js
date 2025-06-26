// calling express
const express = require("express");

// making the express app
const app = express();

// random-ass function
function sum(n) {
    let ans = 0;
    for(let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}

// main route
app.get("/", function(req, res) {
    res.send("hi there")
    // throw new Error("Assesa")
})

// added route
app.get("/wasgud", function(req, res) {
    res.send("Wassup!")
})

app.get("/number", (req, res) => {
    const n = req.query.n; // making the query param
    const ans = sum(n);
    res.send("Hi your answer is:" + ans);
} )
// port number
app.listen(3000); 

// [GET, PUT, POST, DELETE] : [GET, UPDATE, POST(1), REMOVE]
// [200, 404, 500, 411, 403]     : [OK, ROUTE NOT PRESENT, INTERNAL SERVER, WRONG I/P, REQ NOT ALLOWED]

