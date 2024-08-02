const express = require("express");
const { registerDataPost, loginData } = require("../controller/registerController");

const registerRoute = express.Router();

registerRoute.post("/registerData",registerDataPost)

registerRoute.post("/registerLogin",loginData)


module.exports = registerRoute