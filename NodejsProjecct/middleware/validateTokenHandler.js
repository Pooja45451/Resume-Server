const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");
const validationToken= asyncHandler(async(req,res,next)=>
{
console.log("test");
let token;
let authHeader=req.headers.Authorization || req.headers.authorization;

console.log(authHeader);

if(authHeader && authHeader.startWith("Bearer"))
{
    token=authHeader.split(" ")[1];
    console.log(token);
    jwt.verify(token,process.env.ACCESS_TOKEN_SCREEN,(err,decoded)=>
    {
        if(err)
        {
            res.status(401);
            throw new Error("User is not authorized");
        }
    });
}

});

module.exports=validationToken;