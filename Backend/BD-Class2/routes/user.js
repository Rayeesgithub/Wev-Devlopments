const express = require("express");
const router = express.Router();

const {login, signup} = require("../controllers/Auth");
const {auth,isStudent,isAdmin}=require("../middlewares/auth")
// jo routes me middleWares ka order hoga usii order me middlewares work karenge
// ex. "/student" route me <auth ,isStudent> 2 middelwares hai toh -- sab se pehle "Auth" then "isStudent" check hoga


// router.post("/login", login);
router.post("/signup", signup);
router.post("/login",login);

//testing protected routes for single middleware
router.get("/test",auth,(req,res)=>{
    res.json({
        sucess:true,
        message:'Welcome to the Protected route for TESTS'
    })
})
router.get("/student", auth, isStudent, (req,res)=>{
    res.json(
        {
            success : true ,
            message : "student and auth middleWare protected route" ,
        }
    )
} )

router.get("/admin", auth, isAdmin, (req,res)=>{
    res.json(
        {
            success : true ,
            message : "admin and auth middleWare protected route" ,
        }
    )
} )
module.exports = router;