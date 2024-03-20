
const  express = require("express");
const router=express.Router();
const {userRegister,userLogin,currentUser}=require("../controllers/userController");

const validationToken=require("../middleware/validateTokenHandler");
router.post("/register",userRegister);

router.post("/login",userLogin);

router.get("/current",validationToken,currentUser);


module.exports=router;