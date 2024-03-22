const { constants } = require("../constants");


const errorHandler=(err,req,res,next) => {
    
const statusCode=res.statusCode?res.statusCode:500;

switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({title:"VALIDATION_ERROR",message:err.message,stacktrace:err.stack})
        break;
    case constants.UNAUTHORIZATION:
        res.json({title:"UNAUTHORIZATION",message:err.message,stacktrace:err.stack})
        break;    
    case constants.FORBIDDEN:
            res.json({title:"FORBIDDEN",message:err.message,stacktrace:err.stack})
            break;    
    case constants.NOT_FOUND:
            res.json({title:"NOT_FOUND",message:err.message,stacktrace:err.stack})
            break;    
    case constants.NOT_FOUND:
            res.json({title:"SERVER_ERROR",message:err.message,stacktrace:err.stack})
            break;    
     default:
         console.log("No erros All Good");              
         break;
};
};

module.exports=errorHandler;