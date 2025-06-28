const express = require('express')
const z = require("zod")
app = express()

app.use(express.json());
const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number()),
}); // making sure that the input passed by the user is an array of numbers

app.post("/health-checkup", (req, res) => {
    const response = schema.safeParse(schema); // as schema.safeParse accepts only one argument
    // console.log(response);
    if(!response.success) {
        res.status(411).json({
            msg: "input is invalid",
        }) 
    } else {
        res.send({response});
    }
    // res.send("You have " + kidneyLength + " kidneys.");
});

// app.use((err, req, res, next) => { // exception handling
//     res.json({
//         msg: "Sorry bhai pata nai :(",
//     });
// });

app.listen(3000, () => {
    console.log("App is running on PORT 3000");
});