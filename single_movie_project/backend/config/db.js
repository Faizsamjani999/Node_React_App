const mongoose = require("mongoose");

const connection = ()=>{
    mongoose.connect("mongodb+srv://faizsamjani999:m.faiz123@cluster0.yw8vk0b.mongodb.net/single-movie-project?retryWrites=true&w=majority&appName=Cluster0")
    console.log("database connected");
}

module.exports=connection;