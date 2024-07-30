const express = require("express");
const { insert, getData } = require("../Controller/indexController");

const UserRoute = express.Router();



UserRoute.post("/",insert)
UserRoute.get("/",getData)

module.exports = {UserRoute}



