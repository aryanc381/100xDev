import zod from 'zod';
import express from 'express';

const app = express();
app.use(express.json());

const userProfileSchema = zod.object({
    email: zod.string(),
    password: zod.email()
});

export type FinalSchema = zod.infer<typeof userProfileSchema>;

app.post('/login', async (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const mainBody: FinalSchema = req.body;

    console.log(`Success message: ${success}`);
    console.log(`Main Body: ${mainBody}`)
    return res.json({
        status: 404,
        msg: 'Dummy Endpoint is working!'
    });
});

app.listen(3000, () => { console.log('APP is listening at PORT 3000') });