const mongoose = require("mongoose");

const schema = mongoose.Schema({
    fname : String,
    email : String,
    password : String,
})

const registerSchema = mongoose.model("registerSchema",schema);

module.exports = registerSchema