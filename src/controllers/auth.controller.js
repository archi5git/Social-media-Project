const userModel = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcryptjs")

async function registerUser(req,res){
    const{username,password}=req.body;
    const isUserExists =await userModel.findOne({username});
    if(isUserExists){
      return res.status(409).json({
        message:"username already exist please try using another username"
      })
    }
    const user=await userModel.create({
        username,
        password: await bcrypt.hash(password,10)
    })
    const token = jwt.sign({
        id:user._id
    },process.env.JWT_key);
    res.cookie("token", token)
    return res.status(201).json({
        message:"user registered Successfully"
        ,user
    })
} 
async function loginController(req,res){
    const{username,password}=req.body;
    const user =await userModel.findOne({
        username
    })
    if(!user){
        res.status(400).json({
            message:"user not found"
        })
    }
    const isPasswordValid = await bcrypt.compare(password.user.password)
    if(!isPasswordValid){
         res.status(400).json({
            message:"password is invalid"
        })

    }
    const token =jwt.sign({
        id:user._id,
    },process.env.JWT_key);
    res.cookie("token",token);
    res.status(200).json({
        message:"logged in",
        user:{
            username:user.username,
            id:user._id
        }
       
    })

} 

module.exports={
    registerUser,
    loginController

}