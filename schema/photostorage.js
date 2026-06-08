const multer=require("multer");


const storage=multer.memoryStorage();


const photoAdd= multer({
    storage,
    limits:{fileSize:2*1024*1024}
})
module.exports=photoAdd;