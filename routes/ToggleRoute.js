const express=require("express");
const route=express.Router();
const UserSchema = require("../schema/UserSchema");


route.patch("/UpdateUser/:id",async(req,res)=>{

   try {
     
    const {id}=req.params
   const UpdatedUser= await UserSchema.findByIdAndUpdate(id)
   UpdatedUser.status=!UpdatedUser.status;
   await UpdatedUser.save();
res.status(200).json({
            message: "Student updated successfully",
            data: UpdatedUser
        });

   } catch (error) {
    console.log(error);
    res.status(400).json({
        message:"status not updated"
    })
   }
})
module.exports=route;