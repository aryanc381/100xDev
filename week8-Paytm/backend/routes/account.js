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


app.listen(() => {
    console.log("accRouter is listening.");
});

module.exports = router;
