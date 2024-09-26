const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    content :{
        type : String,
        required : true
    },
    media :[{
        type : String,
        required : false
    }],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const Article = mongoose.model("Article",schema);

module.exports = Article