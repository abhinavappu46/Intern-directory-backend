require("dotenv").config();

const mongoose=require("mongoose")




const mongo_Url=process.env.MOGO_URL;
const connectDB= async ()=>{




try {


    mongoose.connect(mongo_Url);
    console.log("connected successfully");
    
} catch (error) {
    console.log("there is error",error);
}
}
module.exports=connectDB;