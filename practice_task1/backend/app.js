const express = require("express");
const cors = require("cors")
const port = 9999;
const app = express();


const connectDatabase = require("./Config/database");
const { UserRoute } = require("./Routes/route");

app.use(cors());
app.use(express.json())

app.use("/",UserRoute)


app.listen(port,async()=>{
    await connectDatabase()
    console.log("Server Started At -",port);
})



