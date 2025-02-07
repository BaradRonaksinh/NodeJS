const mongoose = require('mongoose');

// Schema*************
// create a user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
},{timestamps: true});
// *************Schema*************


// 1.Create a user model
const User = mongoose.model('user', userSchema)  //users is a collection name

module.exports = User;