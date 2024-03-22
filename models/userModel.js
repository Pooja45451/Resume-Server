const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
firstName:{
     type:String,
     require:[true,"Please add the first name"],
     },
lastName:{
          type:String,
          require:[true,"Please add the last name"],
          },     
email:{
        type:String,
        require:[true,"Please add the email"],
        unique:[true,"Email addres already taken"],
        },
password:{
        type:String,
        require:[true,"Please add the password"],
         },
phone:  {
        type:String,
        require:[true,"Please add the phone"],
        },  
roleid: {
        type:String,
        require:[true,"Please add the role"],
        default:"2"
       }                        
                    
},
{
     timestamps:true
}


);


module.exports=mongoose.model("User",userSchema);

