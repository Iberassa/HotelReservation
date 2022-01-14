const mongoose = require('mongoose');

const User = mongoose.model('User', {
    fullname: String,
    email: String,
    password: String,
    phone: Number,
    role:String,
    active:Boolean
})

module.exports = User;
