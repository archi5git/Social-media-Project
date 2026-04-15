async function registerUser(req,res){
    const{usename,password}=req.body;
} 
async function loginController(req,res){
    const{usename,password}=req.body;
} 

module.exports={
    registerUser,
    loginController

}