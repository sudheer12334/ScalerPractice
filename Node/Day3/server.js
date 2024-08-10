const { UserModel }=require ("./userModel");
require("dotenv").config();
const {USERID,MONGODBPASSWORD}=process.env;
const express=require("express");
const { v4: uuidv4 } = require("uuid");
const mongoose=require("mongoose");
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

const sanityMiddleWare=(req,res,next)=>{
    try{
            let user=req.body;
            let isEmpty=Object.keys(user).length==0;
            if(isEmpty){
                res.status(400).json({
                    status: "fail",
                    message:"body is empty"
                })
            }
            else next();
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}

const getUsers = async (req, res) => {
    try {
        let { userid } = req.params; 
        // let user = userdb.find((obj) => {
        //     return obj.id == userid;
        // });
        let user=await UserModel.findById(userid);

        if (!user) {
            res.status(400).json({
                message: "User not present"
            });
        } else {
            res.status(200).json({
                message: `Showing user with id ${userid}`,
                data: user
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


const getAllUsers = async (req, res) => {
    try {
        // let { userid } = req.params; 
        // let user = userdb.find((obj) => {
        //     return obj.id == userid;
        // });
        let allUsers=await UserModel.find();
        
        // let allUsers=await UserModel.findOne(req.body);// gives the first result
         
        if (!allUsers) {

            res.status(400).json({
                message: "User not present"
            });
        } else {

            res.status(200).json({
                message: `Showing all users`,
                data: allUsers
            });
        }
    } catch (err) {
        console.log("entered catch")
        res.status(500).json({
            message: err.message
        });
    }
};


const addUser=async (req,res)=>{
    try{console.log(req.body);
    console.log("entered add user");
        // const newUser=req.body;
        // const user= await UserModel.create(newUser);//using save instead of create for making prehook work
        const newUser= UserModel(req.body);
        const user=await newUser.save();
    res.status(200).json({
        "message": "Adding the users",
        "data": user
    })
    }
    catch(err){res.status(500).json({
        "message": err.message
    })}
}
const updateUser=async (req,res)=>{
    try{
        const {id}=req.params;
        const dataToBeUpdated=req.body;
        const updatedUser= await UserModel.findByIdAndUpdate(id,dataToBeUpdated,{returnDocument:"after",upsert:true});//upsert is for if there is not user with user id it will create that user
        if(updatedUser){
            res.status(200).json({
                message:"User updated succesfully",
                data: updatedUser
            })
        }
        else{
            res.status(500).json({
                message:"User can not be updated",
            })
        }
    }
    catch(err){
        res.status(500).json({
            message: err.message
        })
    }
    // res.json({
    //     "message": "updating all the users"
    // })
}

const deleteUser=async (req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const deletedUser=await UserModel.findOneAndDelete({_id:id})
        if(!deletedUser){
            res.status(400).json({
                message: "user not present" 
            })
        }
        else{
            // userdb.splice(idx,1);
            // fs.writeFileSync("./dev-data.json",JSON.stringify(userdb));
            res.status(200).json({
                "message": `Deleted user with ${id} successfully`
            })
        }
    }
    catch(err){
        res.status(500).json({
            "message": "Unable to delete user"
        })
    }
}

app.get("/user/:userid",getUsers);
app.put("/user",updateUser);
app.patch("/user/:id",updateUser);
app.post("/user",sanityMiddleWare,addUser);
app.delete("/user/:id",deleteUser);
app.get("/user",getAllUsers);
app.listen("3000",function(req,res){
    console.log("App started listeing on port 3000");
})