const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");
const validationToken= asyncHandler(async(req,res,next)=>
{

let token;
let authHeader=req.headers.Authorization || req.headers.authorization;

console.log(authHeader.split(" ")[1]);

if(authHeader && authHeader.split(" ")[1])
{
    console.log("1");
    token=authHeader.split(" ")[1];
    
    console.log(process.env.ACCESS_TOKEN_SCREEN);
    jwt.verify(token,"sushith",(err,decoded)=>
    {
        console.log(decoded);
       
        if(err)
        {
            res.status(401);
            throw new Error("User is not authorized");
        }
        console.log("4");
        req.user=decoded.users;
        console.log(req.user);
        next();
    }
    
    
    );
    if(!token)
    {
        res.status(401);
    }
}
console.log("5");
});

module.exports=validationToken;