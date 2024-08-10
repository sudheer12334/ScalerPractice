//Server creation with Http module

// const http=require("http");

// const server=http.createServer();

// server.on("request",function(req,res){
//     console.log("Server requested");
//     console.log(req.url);
//     console.log(req.method);
//     res.end("Thanks for sending the request")
// })

// server.listen("3000",function(){
//     console.log("Servere started kistening on port 3000");
// })

//Server creation with express JS

const express=require("express");

const app=express();
app.use(function(req,res){
    console.log("Thank You request received");
    res.json({
        "message": "Thank you Sudheer"
    })
})

app.listen("3000",function(req,res){
    console.log("App started listeing on port 3000");
})