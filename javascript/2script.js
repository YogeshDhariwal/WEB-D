console.log("hey i am yogesh")
console.log("i am a software engineer")
// us of let to made it as a global variable(block scope )
let a=5;
var b=6;//(var has global scope so we use let insted of var)
{
    let a=10;
    var b=10;
     console.log(a)
    console.log(b)
}
 console.log(a)
console.log(b)
var c="yogesh"
console.log(a+b+ c)
console.log(typeof a ,typeof b, typeof c)
console.log("name of variabl should start from underscore,dollor,letter not with digit")
const a1=8;
//a1=a1+1; not allowed

//******** data ttypes */
let x="yogesh";
let y=23;
let z=2.5;
const p=true;
let q=undefined;
let r=null;
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q ,typeof r)