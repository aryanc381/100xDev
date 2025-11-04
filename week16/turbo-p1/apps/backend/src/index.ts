import express = require('express');
import { BACKEND_URL } from '@repo/common/config';

const app = express();

app.get('/', async (req, res) => {
    return res.json({
        msg: "Hello world",
        url: BACKEND_URL
    });
});

app.listen(9000, () => { console.log('App is listening at PORT 9000.') });