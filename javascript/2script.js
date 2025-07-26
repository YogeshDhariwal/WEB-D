// console.log("hey i am yogesh")
// console.log("i am a software engineer")
// // us of let to made it as a global variable(block scope )
// let a=5;
// var b=6;//(var has global scope so we use let insted of var)
// {
//     let a=10;
//     var b=10;
//      console.log(a)
//     console.log(b)
// }
//  console.log(a)
// console.log(b)
// var c="yogesh"
// console.log(a+b+ c)
// console.log(typeof a ,typeof b, typeof c)
// console.log("name of variabl should start from underscore,dollor,letter not with digit")
// const a1=8;
// //a1=a1+1; not allowed

// //******** data ttypes */
// let x="yogesh";
// let y=23;
// let z=2.5;
// const p=true;
// let q=undefined;
// let r=null;
// console.log(x,y,z,p,q,r)
// console.log(typeof x,typeof y,typeof z,typeof p,typeof q ,typeof r)
console.log('hello this is variable,datatypes etc in this vedio');
  
let a=5;
var b=10;
var c="yogesh";
console.log(typeof a,typeof c);
console.log('the sum of a,b,c:'+(a+b+c));
// never changed const variable
// const a1=6;
// a1=a1+4;
// let has block level scope
/** means if a let is in a block it cannot affect the global let present outside block but var does */
{
let a=10;
var b=5;
console.log(a);
console.log(b);
}
console.log(a);
console.log(b);
/** data types */
let x="yogesh";  
let y=29;
let z=3.55;
const p=true;
let q=undefined;
let r= null;
console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);

/**intialise and declare a object */
let o={
    "name":"yogesh",
    "job role":"software engineer"
}
o.salary="100 crores";
console.log(o);