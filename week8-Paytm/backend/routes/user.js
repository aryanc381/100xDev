const express = require('express');
const zod = require('zod');
const { User, AccountDB } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');
const { authMiddleware } = require('./middleware');

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
            msg: "Validation Error."
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if(existingUser) {
        return res.status(411).json({
            msg: "Username has been taken."
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })

    const userId = user._id;

    await AccountDB.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    const token = jwt.sign({
        userId
    },  JWT_SECRET);

    res.status(200).json({
        msg: "User created successfully!",
        token: token
    })
});

const signinBody = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if(!success) {
        return res.status(401).json({
            msg: "Wrong Inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    const AccDetails = await AccountDB.findOne({
        userId: existingUser._id
    });

    if(existingUser) {
        const firstname = existingUser.firstname;
        const lastname = existingUser.lastname;
        const token = jwt.sign({
            userId: existingUser._id,
            firstname: existingUser.firstname,
            lastname: existingUser.lastname,
            username: existingUser.username,
            balance: AccDetails.balance
        }, JWT_SECRET);

        return res.status(200).json({
            msg: "Username exists!",
            name: firstname,
            surname: lastname,
            JWT: token,
            balance: AccDetails?.balance ?? 0
        })
    } else {
        res.status(411).json({
        msg: "Incorrect username or password"
        })
    }
    
});


const updateUser = zod.object({
    username: zod.string(),
    password: zod.string().optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})
router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateUser.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            msg: "Please pass username* and anything you want to"
        });
    }

    await User.updateOne({
        _id: req.userId
    }, req.body)

    const updatedUser = await User.findOne({
        _id:req.userId
    })

    res.status(200).json({
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        username: updatedUser.username,
        password: updatedUser.password,
        msg: "Updated successfully."
    })
})

router.get('/bulk', async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            { firstname: { "$regex": filter} },
            { lastname: { "$regex": filter} }
        ]
    });

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    });
});

app.listen(() => {
    console.log("userRouter is listening.")
});

module.exports = router;