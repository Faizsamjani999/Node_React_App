const registerSchema = require("../model/registerSchema")

const registerDataPost = async(req,res)=>{

    

    let data = await registerSchema.create(req.body)
    console.log(data);
    res.json({msg : "User registered successfully", data : data})
    
}


module.exports = {
    registerDataPost
}