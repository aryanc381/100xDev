import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.type.ObjectId,
        ref: "Course",

    }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    price: 5999
})

const User = mongoose.Schema('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);