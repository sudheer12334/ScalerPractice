require("dotenv").config();
const {USERID,MONGODBPASSWORD,PORT}=process.env;
const express=require("express");
const mongoose=require("mongoose");
const dbURL=`mongodb+srv://${USERID}:${MONGODBPASSWORD}@cluster0.a5cc4i5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(dbURL).then(connection=>{
    console.log("DB connected");
}).catch(err=>{
    console.log(err.mesaage);
})
const {ProductModel}=require("./model/productModel");
const app=express();
app.use(express.json());

app.get("/user",function(req,res){
    console.log(req.query);
    res.json({data:req.query});
})
app.get("/product",async (req,res)=>{
    const {query:{sort,page,limit}}=req;
    let products=ProductModel.find();
    if(sort){
        let [prop,order]=sort.split("_");
        order=order=="desc"?-1:1;
        products=products.sort({[prop]:order})
    }
    if(limit&&page){
        const ppp=2;
        const productToSkip=ppp*(page-1);
        products=products.skip(productToSkip).limit(ppp);
    }
    
    let data=await products
    if(data.length==0){
        res.status(400).json({
            msg:"data not found"
        })
    }
    res.status(200).json(data);
})

app.listen(PORT,function(req,res){
    console.log(`App started listeing on port ${PORT}`);
})