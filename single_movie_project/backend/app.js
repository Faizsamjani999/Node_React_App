const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const registerRoute = require("./routes/registerRoute");
const port = 9999;
const app = express();

app.use(cors());
app.use(express.json())

app.use("/",registerRoute)



app.listen(port,()=>{
    connection()
    console.log("Server Started At -",port);
})