// auth, isStudent, isAdmin

// auth - authentication
// isStudent, isAdmin - authorization

const jwt = require("jsonwebtoken");
require('dotenv').config();

exports.auth=(req,res,next)=>{
    try{
        const token = req.body.token || req.cookies.token ||  req.header("Authorization").replace("Bearer ","") ;
    if(!token){
        res.status(401).json({
            status:false,
            message:"token missing"
        })
    }
  
    //verify the token
    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
        //why this ?
        req.user = payload;
    } catch(error) {
        return res.status(401).json({
            success:false,
            message:'token is invalid',
        });
    }
    next();
        
}  
catch(error){
    return res.status(401).json({
        success:false,
        message:'Something went wrong, while verifying the token',
    });

}
    }
exports.isStudent=(req,res,next)=>{
    try{
     if(req.user.role!="Student"){
        return res.status(401).json({
            sucess:false,
            messsage:"THis is a protected route for students"
        })
     }
     next();
    }
    catch(error){
       return res.status(500).json({
         sucess:false,
         message:'User Role is not matching',
       })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
     if(req.user.role!="Atudent"){
        return res.status(401).json({
            sucess:false,
            messsage:"THis is a protected route for Admin"
        })
     }
     next();
    }
    catch(error){
       return res.status(500).json({
         sucess:false,
         message:'User Role is not matching',
       })
    }
}

