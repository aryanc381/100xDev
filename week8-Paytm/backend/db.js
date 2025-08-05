const mongoose = require('mongoose');
const { minLength, maxLength } = require('zod/v4');
const { required } = require('zod/v4-mini');

mongoose.connect('mongodb+srv://venomc381:Venom%4054321@cluster0.yfrink8.mongodb.net/');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 5,
        maxLength: 30
    },
    lastname: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        maxLength: 20
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 8
    },
});

const accountSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    balance: {
        type: Number,
        required: true
    }
});

const AccountDB = mongoose.model('Paytm-account', accountSchema);
const User = mongoose.model('Paytm-users', userSchema);

module.exports = {
    AccountDB,
    User
};