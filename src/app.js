const express=require("express")
const authRoutes=require("./routes/auth.routes")
const postRoutes=require("./routes/post.routes")
const cookieParse=require("cookie-parser")

const app=express()
app.use(cookieParse())
app.use(express.json())
app.use('/api/post',postRoutes)



app.use('/api/auth',authRoutes)
module.exports=app;