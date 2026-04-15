const express=require("express")
const userModel = require("../models/user.models")
const jwt= require("jsonwebtoken")
const router =express.Router()

router.post('/register',async(req,res)=>{
    const{username,password}=req.body
    const existingUser = await userModel.findOne({
        username
    })
    if(existingUser){
        return res.status(409).json({
            message:"user name already exist"
        })
    }

    const user =await userModel.create({
        username,password
    })
    const token=jwt.sign({
        id:user._id
    },process.env.JWT_key)
    
    res.status(201).json({
        message:"user created successfully",
        user
    })
})


module.exports=router