const express=require("express");
const route=express.Router();
const UserSchema = require("../schema/UserSchema");
route.delete("/DeleteUser/:id",async (req,res)=>{
    try {
        const {id}=req.params
        const DeletedUser= await UserSchema.findByIdAndDelete(id);
        console.log(DeletedUser)
        res.status(200).json({
            message:"user deleted ",
            Data:DeletedUser
        })
    } catch (error) {
        res.status(400).json({
            message:"user not deleted",
        })
        console.log(error);
    }
})

module.exports=route;