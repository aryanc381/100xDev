const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.get("/interest", (req, res)=> {
    const principal = parseInt(req.query.principal);
    const time = parseInt(req.query.time);
    const rate = parseInt(req.query.rate);
    const interest = principal * time * rate / 100;
    const total = principal + interest;

    res.send({
        total: total,
        interest: interest,
    })
});

app.listen(3000, ()=>{
    console.log("App is listening at PORT 3000");
})