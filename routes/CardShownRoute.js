const express = require("express");
const UserSchema = require("../schema/UserSchema");
const route = express.Router();


route.get("/Details", async (req, res) => {
    try {
        const users = await UserSchema.find();

  const FormattedUsers= users.map((user)=>({
...user.toObject(),
photo: user.photo
        ? `data:image/jpeg;base64,${user.photo.toString("base64")}`
        : null
  }))

        console.log(users);
        res.status(200).json({
            message: "all students fectched",
            data: FormattedUsers
        })
    } catch (error) {
        res.status(400).json({
            message: "fetch not done"
        })
        console.log(error);

    }


})

module.exports = route;