// todo - title, description, completed

const mongoose = require('mongoose'); // calling mongoose

mongoose.connect("mongodb+srv://venomc381:Venom%4054321@cluster0.yfrink8.mongodb.net/") // connecting the db
const todoSchema = mongoose.Schema({ // defining the fucking schema
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema) // linking the mongoose to a title, creating a sub-db

module.exports = {
    todo
}