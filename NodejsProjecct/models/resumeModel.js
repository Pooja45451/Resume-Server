const mongoose=require("mongoose");
/**
@type {mongoose.SchemaDefinitionProperty}
*/

const resumeSchema=mongoose.Schema({
content:{
     type:String,
     require:[true,"Please add the contact name"],
     },
 createdBy: {
     type:mongoose.Schema.Types.ObjectId,
     require:[true,"Please add the created By"],
    
     },  
updatedBy: {
          type:mongoose.Schema.Types.ObjectId,
          require:[true,"Please add the updated By"],
         
          },   
          

                    
},
{
     timestamps:true
}


);

module.exports=mongoose.model("Resume",resumeSchema);