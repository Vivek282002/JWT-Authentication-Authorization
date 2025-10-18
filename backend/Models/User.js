const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;