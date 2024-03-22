const express=require("express");
const router=express.Router();
const {getContacts,createContact,selectContact,updateContact,deleteContact}=require("../controllers/contactController");



router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(selectContact).put(updateContact).delete(deleteContact);


module.exports=router;