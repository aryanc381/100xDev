const zod = require('zod');

function validateInpute(arr) {
    const schema = zod.object({
    email: zod.string().email({message: "Invalid Email format"}),
    password: zod.string().min(8, {message: "Invalid password"})
    })

    const response = schema.safeParse(arr);

    if (response.success) {
        console.log(response);
    } else {
        const errors = response.error.errors;
        errors.forEach((err) => {
            console.log(err.message);
        });
    }
    
}

validateInpute({
    "email": "aryan@gmail.com",
    "password": "1234567890"
});