const express=require("express");
const router=express.Router();
const {getResumes,createResume,selectResume,updateResume,deleteResume}=require("../controllers/resumeController");
const validationToken = require("../middleware/validateTokenHandler");


router.use(validationToken);
router.route("/").get(getResumes).post(createResume);
router.route("/:id").get(selectResume).put(updateResume).delete(deleteResume);


module.exports=router;