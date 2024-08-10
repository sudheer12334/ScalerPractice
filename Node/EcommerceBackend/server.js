// const { UserModel }=require ("./userModel");
require("dotenv").config();
const {USERID,MONGODBPASSWORD,PORT}=process.env;
const express=require("express");
const { v4: uuidv4 } = require("uuid");
const mongoose=require("mongoose");
const cors=require("cors");
const {userRouter}=require("./routes/userRoutes");
const {productRouter}=require("./routes/productRoutes");
const dbURL=`mongodb+srv://${USERID}:${MONGODBPASSWORD}@cluster0.a5cc4i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbURL).then(connection=>{
    console.log("DB connected");
}).catch(err=>{
    console.log(err.mesaage);
})
const app=express();
app.use(express.json());
// app.use(function(req,res){
//     console.log("Thank You request received");
//     // res.json({
//     //     "message": "Thank you Sudheer"
//     // })
// })
// const fs=require("fs");
const { log } = require("console");
// const userdb=JSON.parse(fs.readFileSync("./dev-data.json","utf-8")) ;

const corsConfig={
    origin: true,
    credentials: true
}
app.use(cors(corsConfig));
app.use("/user",userRouter);
app.use("/product",productRouter);
app.options("*",cors(corsConfig));


app.listen(PORT,function(req,res){
    console.log(`App started listeing on port ${PORT}`);
})