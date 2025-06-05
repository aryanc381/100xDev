const express = require("express")

const app = express()

/*
function sum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}
app.get('/', function(req, res){
    const n = req.query.n;
    const ans = sum(n)
    res.send("Hi, your answer is: " + ans);
})
*/

/*
GET - To get answer (from server to user)
POST - To post data (allowed to use only once)
PUT - To update data (updation from user to server)
DELETE - TO delete data (to delete data from user)
*/

/*
400 - Could not understand client request.
500 - Internal function server error.
200 - All Ok.
404 - Not found.
411 - Query was incorrect.
403 - Auth failed / Not allowed.
*/

app.get('/', function(req, res){

})
app.listen(3000)