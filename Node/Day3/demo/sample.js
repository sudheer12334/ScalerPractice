const express=require("express");
const { v4: uuidv4 } = require("uuid");
const mongoose=require("mongoose");
const dbURL="mongodb+srv://sudheer12334:8OzOHSpAfT7Ef4f1@cluster0.a5cc4i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbURL).then(connection=>{
    console.log("DB connected");
});
const app=express();
app.use(express.json());
// app.use(function(req,res){
//     console.log("Thank You request received");
//     // res.json({
//     //     "message": "Thank you Sudheer"
//     // })
// })

const fs=require("fs");
const userdb=JSON.parse(fs.readFileSync("./dev-data.json","utf-8")) ;

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

const getUsers = (req, res) => {
    try {
        let { userid } = req.params; 
        let user = userdb.find((obj) => {
            return obj.id == userid;
        });
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


const addUser=(req,res)=>{
    try{console.log(req.body);
    console.log("entered add user");

    const newUser={
        
            id: userdb.length+1,
            ...req.body
    };
    userdb.push(newUser);
    fs.writeFileSync("./dev-data.json",JSON.stringify(userdb));
    res.status(200).json({
        "message": "Adding the users"
    })
    }
    catch(err){res.status(500).json({
        "message": err.message
    })}
}
const updateUser=(req,res)=>{
    
    res.json({
        "message": "updating all the users"
    })
}

const deleteUser=(req,res)=>{
    try{
        const {id}=req.params;
        console.log(req.params);
        const idx=userdb.findIndex((obj)=>{
            return obj.id==id;
        })
        if(idx==-1){
            res.status(400).json({
                message: "user not present"
            })
        }
        else{
            userdb.splice(idx,1);
            fs.writeFileSync("./dev-data.json",JSON.stringify(userdb));
            res.status(200).json({
                "message": `Deleted user with ${idx} successfully`
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
app.post("/user",sanityMiddleWare,addUser);
app.delete("/user/:id",deleteUser);

app.listen("3000",function(req,res){
    console.log("App started listeing on port 3000");
})