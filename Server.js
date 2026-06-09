const express = require("express");
const connectDB = require("./mongo_connection/mongo");
const userRoute = require("./routes/RegisterRoute");
const FetchRoute = require("./routes/CardShownRoute");
const DeleteRoute = require("./routes/DeleteRoute");
const ToggleRoute=require("./routes/ToggleRoute")
const cors = require("cors");





const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());
app.use("/api", userRoute);
app.use("/api", FetchRoute);
app.use("/api", DeleteRoute);
app.use("/api",ToggleRoute);

connectDB();

app.listen(port, () => {
    console.log("server is runing");
})