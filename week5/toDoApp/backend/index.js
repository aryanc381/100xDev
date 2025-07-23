const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');

app = express();

app.use(cors(
    // {
    // origin: "http://localhost:5173/"
    // }
));
app.use(express.json());

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input."
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "ToDo has been created."
    })
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({});

    res.json({
        todos
    })
})

app.get("/todos/:id", async (req, res) => {
    const todos = await todo.find({});
    const id = req.params.id;
    for(let i = 0; i < todos.length; i++) {
        if(todos[i]._id.toString() === id) {
            return res.status(201).json({
                User: todos[i]
            });
        }
    }
    return res.status(404).json({
        msg: "User not found."
    });
});

app.put("/completed", async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updatePayload.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong input."
        })
    }

    await todo.update({
        _id: req.body.id // _id because mongodb has "id" is "_id"
    }, {
        completed: true
    })
    res.json({
        msg: "ToDo has been marked as completed."
    })
})

app.listen(3000, () => {
    console.log("App is listening at PORT 3000");
})