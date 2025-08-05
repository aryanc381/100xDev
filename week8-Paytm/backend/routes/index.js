const express = require('express');
const userRouter = require('./user');
const accRouter = require('./account');
const app = express();
const router = express.Router();

router.use('/user', userRouter);
router.use('/account', accRouter);

app.listen(() => {
    console.log("rootRouter is listening.")
})
module.exports = router;