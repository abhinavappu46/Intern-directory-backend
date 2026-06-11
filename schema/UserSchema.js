const mongoose=require("mongoose");


const UserSchema=new mongoose.Schema({
    FullName:{type: String },
    Email:{type:String ,unique:true, index:true},
    phone:{type:String},
    Qualification:{type:String},
    role:{type:String},
    photo:{type:Buffer},
    status:{type:Boolean , default:false}
})

module.exports=mongoose.model("User",UserSchema,"students");