const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    gender: String
})

module.exports = mongoose.model('Signup',signupSchema)