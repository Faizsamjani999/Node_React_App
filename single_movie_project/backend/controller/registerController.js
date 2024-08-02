const registerSchema = require("../model/registerSchema")

const registerDataPost = async(req,res)=>{

    let userMail = await registerSchema.findOne({email : req.body.email})

    if(userMail)
    {
        res.json({msg:"user already exist..."})
    }
    else
    {
        let data = await registerSchema.create(req.body)
        console.log(data);
        res.json({msg : "User registered successfully", data : data})
    }
}

const loginData = async(req,res)=>{
    let userAuth = await registerSchema.findOne({email:req.body.email})
    let userPass = await registerSchema.findOne({password:req.body.password})

    if(userAuth)
    {
        if(userPass)
        {
            res.status(200).json({msg:"you are login succussfully..."})
        }
        else{
            res.status(401).json({msg:"password is wrong"});
        }
    }
    else{
        res.status(404).json({msg:"email not registred"})
    }
}


module.exports = {
    registerDataPost,
    loginData
}