const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router();
const userModel=require("../models/user.models")
router.post("/",async (req,res)=>{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }
    try{
    const decoded=jwt.verify(token,process.env.JWT_key)

    const user=userModel.findOne({ _id: decoded.userId })
    req.user=user;

    }
    catch(err){
        return res.status(401).json({message:"Invalid token"})
    }
})
module.exports=router;
