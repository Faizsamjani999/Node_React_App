const express = require("express");
const { registerDataPost } = require("../controller/registerController");

const registerRoute = express.Router();

registerRoute.post("/registerData",registerDataPost)


module.exports = registerRoute