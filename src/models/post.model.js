const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    caption:String,
    image:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"users"}
})
const postModel=mongoose.model("posts",postSchema)
module.exports=postModel;