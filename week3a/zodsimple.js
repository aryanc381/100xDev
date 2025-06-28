const zod = require('zod');

function validateInpute(arr) {
    const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
    })

    const response = schema.safeParse(arr);
    console.log(response);
}

validateInpute({
    "email": "aryan@gmail.com",
    "password": "1234567890"
});