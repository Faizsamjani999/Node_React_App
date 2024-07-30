const user = require("../Model/register");

const insert = async(req,res)=>{
    const {name,surname,email,password} = req.body;

    const data =await  user.create(req.body)

    res.send({data:data})
}

const getData = async(req,res)=>{
    await user.find({
        
    })
}

module.exports={
    insert,
    getData
}