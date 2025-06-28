const mongoose = require('mongoose')
const express = require('express')
mongoose.connect('mongodb+srv://venomc381:Venom%4054321@cluster0.yfrink8.mongodb.net/userappnew')

const User = mongoose.model('User', {name: String, email: String, password: String});
const app = express();

app.use(express.json());

app.post('/signup', async (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email: username});
    if(existingUser) {
        return res.status(400).json({"msg":"Username already exists"});
    }
    const user = new User({
    name: name,
    email: username,
    password: password
    });
    user.save();
    res.json({
        "msg": "User created successfully"
    })
})

app.listen(3000, ()=> {
    console.log("Server running on PORT 3000");
})