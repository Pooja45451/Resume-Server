const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
userName:{
     type:String,
     require:[true,"Please add the User name"],
     },
email:{
        type:String,
        require:[true,"Please add the email"],
        unique:[true,"Email addres already taken"],
        },
 password :{
            type:String,
            require:[true,"Please add the password"],
            }
                    
},
{
     timestamps:true
}


);


module.exports=mongoose.model("User",userSchema);

