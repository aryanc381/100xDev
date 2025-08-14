const express = require('express');
const { authMiddleware } = require('./middleware');
const { AccountDB } = require('../db');

const router = express.Router();
const app = express();

router.get('/balance', authMiddleware, async (req, res) => {
    const account = await AccountDB.findOne({
        userId: req.userId
    })

    res.status(200).json({
        id: account._id,
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async (req, res) => {
    const { amount, to } = req.body;
    const account = await AccountDB.findOne({
        userId: req.userId
    });

    if(account.balance < amount) {
        return res.status(400).json({
            msg: "Insufficient balance."
        });
    }

    const toAccount = await AccountDB.findOne({
        userId: to
    });

    if(!toAccount) {
        return res.status(400).json({
            msg: "Receipant account not found!"
        })
    }

    await AccountDB.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await AccountDB.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.status(200).json({
        msg: "Transfer successfull."
    })
});


app.listen(() => {
    console.log("accRouter is listening.");
});

module.exports = router;
