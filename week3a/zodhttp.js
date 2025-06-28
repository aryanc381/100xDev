const zod = require('zod');

application.post("/login", (req, res) => {
    const inputs = req.body;
    const response = validateInput(req.body);
    if(!response.success) {
        res.json({
            msg: "Your inputs are invalid"
        })
        return;
    }
})