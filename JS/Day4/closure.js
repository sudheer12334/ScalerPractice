// function grandParent(a){
//     function parent(b){
//         function child(c){
//             return b+c;
//         }
//         return child;
//     }
//     return parent;
// }

// const f1=grandParent(5);
// const f2=f1(6);
// const ans=f2(9);

// let sigma={
//     name:'manas',
//     age:24,
//     address:{
//         street:'marag',
//         city:'KAK'
//     }

// }


// let alpha=Object.create(sigma);
// console.log(alpha);

class A {
    a='a'
}
    A.prototype.c = 'c'

    class B extends A {
        b= 'b'
    }
    const a = new A()
    const b = new B()
    
    console. log(a.a)
    console. log(a.b)
    console. log(a.c)
    console. log(b.a)
    console. log(b.b)
    console. log(b.c)