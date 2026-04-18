const express=require("express")
const router=express.Router();
const authmiddleware=require("../middlewares/auth.middleware")
const multer=require("multer")
const { createPostController }=require("../controllers/post.controller")
const upload=multer({storage:multer.memoryStorage()})
router.post("/",authmiddleware,upload.single("image"),createPostController)
module.exports=router;
