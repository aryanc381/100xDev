// import express
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.get('/', function(req, res) {
    res.send("<b>Hello World!<b>")
})

app.post('/conversations', (req, res) => {
    console.log(req.body);
    res.send({
        msg: "2+2=4",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})