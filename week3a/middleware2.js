const express = require('express')
app = express()

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys.");
});

app.use((err, req, res, next) => { // exception handling
    res.json({
        msg: "Sorry bhai pata nai :(",
    });
});

app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});