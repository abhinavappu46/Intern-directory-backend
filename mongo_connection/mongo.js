require("dotenv").config();

const mongoose=require("mongoose")




const mOGO_URI=process.env.MONGO_URI;
const connectDB= async ()=>{




try {


    await mongoose.connect(mOGO_URI);
    console.log("connected successfully");
    
} catch (error) {
    console.log("there is error",error);
}
}
module.exports=connectDB;