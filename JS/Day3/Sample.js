// //deep copy polyfills

// let person = {
//     firstName: 'gabbar',
//     lastName: 'Singh',
//     address: {
//         city:'kakinada',
//         country:'india'
//     },
//     friends:['vand','band',{first:'jai',last:'kumar'}] 
// }

// function clone(obj){
//     let newObj ={};
//     for(let key in obj){
//         if(typeof obj[key]==='object'){
//             let innerCopiedObj =clone(obj[key]);
//             if(Array.isArray(obj[key])){
//                 newObj[key]= Object.values(innerCopiedObj);
//             }
//             else{
//                 newObj[key]=innerCopiedObj;
//             }
//         }
//         else{
//             newObj[key]=obj[key];
//         }
//     }    
//     return newObj;
// }

// let clonedPerson=clone(person);
// console.log(Object.values(person));

// clonedPerson.friends[2].zing='ping';
// console.log(person);
// console.log(clonedPerson);

//flatten an array

let input=[1,2,3,[4,5],[6,7,8]];
Array.prototype.flat=function(){
    let newArr=[];
    for(let i=0;i<this.length;i++){
        if(Array.isArray(this[i])){
            let innerArr=this[i].flat();
            newArr.push(...innerArr);
        }
        else{
            newArr.push(this[i]);
        }
    }
    return newArr;
}

let flattenArray=input.flat();
console.log(flattenArray);