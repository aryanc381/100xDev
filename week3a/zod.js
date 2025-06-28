const express = require('express')
const zod = require("zod")
app = express()

app.use(express.json());
const schema = zod.array(zod.number()); // making sure that the input passed by the user is an array of numbers

app.post("/health-checkup", (req, res) => {
    console.log("Body:", req.body);
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success) {
        res.status(411).json({
            msg: "input is invalid",
        }) 
    } else {
        res.send({response});
    }
    // res.send("You have " + kidneyLength + " kidneys.");
});

app.use((err, req, res, next) => { // exception handling
    res.json({
        msg: "Sorry bhai pata nai :(",
    });
});

app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});