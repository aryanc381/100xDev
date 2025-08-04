const express = require('express');
const zod = require('zod');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const router = express.Router();
const app = express();

const signupBody = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
});

router.post('/signup', async (req, res) => {
    const { success } = signupBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            msg: "Validation Error"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if(existingUser) {
        return res.status(411).json({
            msg: "Username has been taken / Incorrect inputs."
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = user._id;
    
    const token = jwt.sign({
        userId
    },  JWT_SECRET);

    res.status(200).json({
        msg: "User created successfully!",
        token: token
    })
});

app.listen(3000, () => {
    console.log("App is listening at PORT 3000");
})
module.exports = router;