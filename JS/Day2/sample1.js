// var name= 'sudheer';
// let age=40;
// let sex='male';

// sayhi();
// console.log(x);
// var x=5;
// function sayhi(){
//     console.log('hello');
// }

// let x = 10;

// function outerFunction() {
//   console.log("Outer x:", x); // Output: Outer x: 10
//   let y = 20;

//   function innerFunction() {
//     // Inner scope variable shadowing the outer x
//     let x = 30;

//     console.log("Inner x:", x); // Output: Inner x: 30
//     console.log("Inner y:", y); // Output: Inner y: 20
//   }

//   innerFunction();
// }

// outerFunction();
// console.log("Global x:", x); // Output: Global x: 10


// console.log(this);

// let a=10;
// if(true){
//     console.log(a);
//     let a=20;
    
// }
// console.log(a);

// var person= {
//     name: 'sudheer',
//     age: 30,
//     sayHi: function(){
//         console.log(this);
//         function child(){
//             console.log(this);
//         }
//         child();
//     }
    

// }
// person.sayHi();



// function Person(name,age){
//     //console.log(this);
//     this.name=name;
//     this.sage=age;

// }

// const per=new Person('sudheer',24);
// console.log(per);



var person= {
    name: 'sudheer',
    age: 30,
    sayHi: function(){
        console.log(this);
        const child=() => {
            console.log(this);
        }
        child();
    }
    

}
person.sayHi();