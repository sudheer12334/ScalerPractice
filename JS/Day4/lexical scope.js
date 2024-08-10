var a=10;
function b(){
    console.log('in b',a);
}
function fn(){
    var a=20;
    b();
    console.log('in fn',a);
}
fn();