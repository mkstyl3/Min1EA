const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    password: String,
    name: String,
    surname: String,
    role: String,
    state: Boolean
}, {collection:'users'});

module.exports = mongoose.model('User', userSchema);