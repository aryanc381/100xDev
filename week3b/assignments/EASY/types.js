const zod = require('zod');


const Admin = zod.object({
    username: zod.string(),
    password: zod.string(),
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}