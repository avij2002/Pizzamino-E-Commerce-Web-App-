const express = require('express');
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req,res)=>{
    const {name ,email ,password} = req.body
    const user_found = await User.find({email:req.body.email});
    console.log(user_found)
    try{
        if(user_found.length===0){
            const newUser = new User({name,email,password}) 
            console.log("Not Found");
            res.send('User Registered successfully');
            newUser.save();
        }
        else{
            console.log("FOund");
            console.log(newUser);
            console.log("user_found"+user_found);
            return res.status(400).json({message : "error"});
        }
    }
    catch(error){
        return res.status(400).json({message : error});
    }
})

router.post("/login", async (req,res)=>{
    const {email ,password} = req.body

    try{
        const user = await User.find({email,password})
        if(user.length>0)
        {
            const currenUser = {
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id : user[0]._id
            }
            res.send(currenUser);
        }
        else{
            return res.status(400).json({message : "User Login Failed"});
        }
    }
    catch(error){
        return res.status(400).json({message : "Something Went Wrong"});
    }
})

module.exports = router