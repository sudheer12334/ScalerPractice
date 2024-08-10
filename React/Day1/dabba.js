Array.prototype.myFilter=function(cb){
    var arr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            arr.push(this[i]);
        }
        

    }
    return arr;
}

console.log([1,2,3,4].myFilter((item)=> item>3));