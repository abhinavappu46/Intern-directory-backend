const express = require("express");
const route = express.Router();
const User = require("../schema/UserSchema");
const photoAdd = require("../schema/photostorage");


route.post("/register",
    photoAdd.single("photo")
    , async (req, res) => {

        try {

            const user = new User({

                ...req.body,
                photo: req.file ? req.file.buffer : null
            });

            console.log(req.body);
            console.log(req.file);
            await user.save();
            res.status(200).json({
                message: "user added successfully",
                Data: user
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: "user not added"
            })
        }
    })
module.exports = route;