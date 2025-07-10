const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://venomc381:Venom%4054321@cluster0.yfrink8.mongodb.net/")

const adminSchema = mongoose.Schema({
    username: String,
    password: String,
})

const admin = mongoose.model("admins", adminSchema);
module.export = {
    admin
}