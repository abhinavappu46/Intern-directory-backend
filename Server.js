const express = require("express");
const connectDB = require("./mongo_connection/mongo");
const userRoute = require("./routes/RegisterRoute");
const FetchRoute = require("./routes/CardShownRoute");
const DeleteRoute = require("./routes/DeleteRoute");
const ToggleRoute=require("./routes/ToggleRoute")
const cors = require("cors");
const compression=require("compression");





const app = express();
const PORT = process.env.PORT || 5000;


app.use(compression());
app.use(express.json());
app.use(cors({
    origin:"https://intern-directory.onrender.com"
}));
app.use("/api", userRoute);
app.use("/api", FetchRoute);
app.use("/api", DeleteRoute);
app.use("/api",ToggleRoute);

connectDB().then(()=>{



app.listen(PORT, () => {
    console.log("server is runing");
});
});