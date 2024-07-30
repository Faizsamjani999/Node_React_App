const mongoose = require("mongoose");

const data = async ()=>{
    await mongoose.connect("mongodb+srv://faizsamjani999:m.faiz123@cluster0.yw8vk0b.mongodb.net/First-Project?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database Connected Successfully...")
}


module.exports = data;



