const express=require("express");
const {getUsers,getAllUsers,addUser,updateUser,deleteUser} = require("../controller/userController");
const {sanityMiddleWare} = require("../middleware/sanityOfPayload");

const userRouter=express.Router();

userRouter
    .route("/:id")
    .patch(updateUser)
    .delete(deleteUser)

userRouter
    .route("/")
    .post(sanityMiddleWare,addUser)
    .get(getAllUsers)
userRouter
    .route("/:id")    
    .get(getUsers)

module.exports={userRouter}