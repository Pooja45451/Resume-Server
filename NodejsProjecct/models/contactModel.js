const mongoose=require("mongoose");
/**
@type {mongoose.SchemaDefinitionProperty}
*/

const contactSchema=mongoose.Schema({
name:{
     type:String,
     require:[true,"Please add the contact name"],
     },
email:{
        type:String,
        require:[true,"Please add the email"],
        },
 phone:{
            type:String,
            require:[true,"Please add the Phone"],
            }
                    
},
{
     timestamps:true
}


);

module.exports=mongoose.model("Contact",contactSchema);