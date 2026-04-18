const jwt=require("jsonwebtoken")
const userModel=require("../models/user.models")
async function authmiddleware(req,res,next){
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({message:"unauthorized"})
    }
    try{
    const decoded=jwt.verify(token,process.env.JWT_key)

    const user=userModel.findOne({ _id: decoded.userId })
    next();
    req.user=user;

    }
    catch(err){
        return res.status(401).json({message:"Invalid token"})
    }
}
module.exports=authmiddleware;