//file system

// const { log } = require("console");
const fs=require("fs");

// fs.writeFileSync("f1.txt", "Hi I am Chitti the robot");
// console.log("Logged Succesfully");

const data=fs.readFileSync("f1.txt","utf-8");
console.log("Content is ->" ,data);

const Buffer1=new Buffer("Hello")
const Buffer2=new Buffer("World")

const str=Buffer.concat([Buffer1,Buffer2]);
console.log(str.toString());