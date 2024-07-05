const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: String
},{timestamp: true});

const UserCollection = mongoose.model("", userSchema);

module.exports = UserCollection