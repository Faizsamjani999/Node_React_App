const express = require("express");
const mongoose  = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    surname : String,
    email : String,
    password : String
})

const user = mongoose.model("user",schema)

module.exports = user