const express = require('express');
const rootRouter = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1/api', rootRouter);

app.listen(3000, () => {
    console.log("App is listening at PORT 3000.");
})