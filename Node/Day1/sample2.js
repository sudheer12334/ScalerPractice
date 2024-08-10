const path=require("path");
const fs=require("fs");

//it repesents the features in node js
// console.log(global);

//it represent currently running node js process
// console.log(process);

console.log(__filename);
console.log(__dirname);
const dirName=path.dirname(__filename);
const projectPath=path.dirname(__dirname);
console.log(dirName);
console.log(projectPath);
for(let i=2;i<6;i++){
    let pathName=path.join(projectPath,`Day${i}`);
    // console.log(pathName);
    fs.mkdirSync(pathName);
}
