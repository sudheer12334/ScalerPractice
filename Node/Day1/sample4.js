const http=require("http");

const server=http.createServer();

server.on("request",function(req,res){
    console.log("request made");
    res.end("Thank for sending the response");
})

server.listen(3000);