const postModel=require("../models/post.model")
const generateCaption=require("../service/ai.service")
const {uploadfile}  = require("../service/storage.service")
const {v4:uuidv4}=require("uuid")
async function createPostController(req,res){
    const file=req.file;
    console.log("File received:", file); // Debugging line to check if the file is received
    const base64Image=new Buffer.from(file.buffer).toString("base64");
    const caption=await generateCaption(base64Image);
    const result= await uploadfile(file.buffer,`${uuidv4()}`)
    const post=await postModel.create({
        caption:caption,
        image:result.url,
        user:req.user._id   
    })
    res.status(201).json({
        message:"post created successfully",
        post
    })
    res.json({
        caption,
        result,
    })
    console.log("Generated Caption:", caption); // Debugging line to check the generated caption
   // Debugging line to check the base64 string
    
}
module.exports={createPostController}