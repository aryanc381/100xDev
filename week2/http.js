const fs = require("fs");
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json());

app.get('/asd', function(req, res) {
    console.log(req.body);
    res.send('<b>Hello World!</b>');
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});

// fetch
//