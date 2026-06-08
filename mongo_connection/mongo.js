const mongoose=require("mongoose")




const mongo_Url="mongodb://localhost:27017/rshostelHub"
const connectDB= async ()=>{




try {


    mongoose.connect(mongo_Url);
    console.log("connected successfully");
    
} catch (error) {
    console.log("there is error",error);
}
}
module.exports=connectDB;