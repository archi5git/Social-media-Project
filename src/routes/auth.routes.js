const express=require("express")
const router = express.Router()

const{registerUser,loginController}=require("../controllers/auth.controller")


router.post('/register',registerUser);
router.post('/login',loginController);



module.exports=router;









