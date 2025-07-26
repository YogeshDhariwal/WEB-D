// let a = parseInt(prompt("enter a number"));
// let b = parseInt(prompt("enter a second number"));
// if (isNaN(a) || isNaN(b)) {
//     throw new Error("sorry this is not allowed");

// }
// // try catch works synchronaslly is there is a asynchronous function eg. setimeout then catch block doesnt execute because script dies at try block

// function main( ){


// let x=5;
// try {
//     console.log("the sum is", (a + b) * x)
//     return true
// } 
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
//     console.log('error is there');
//     return false
// }
//  finally{
//     console.log('files are being closed and db conection is being closed');
//  }
// }
//  let c=main();

 /** mainly finally used inside a function when we return inside a dunction that means th code is ends there further script will not work but if we want further scritp will work then we use finallly to work on further script */

let a =(prompt("enter a number "))
let b=(prompt("enter a  another number"))
 if(isNaN(a)|| isNaN(b)){
    throw  SyntaxError("sorry this is not allowed");
    
 }
let c=parseInt(a)+parseInt(b);

try {
    console.log('the sum of given two number is ',c*x);
} catch (error) {
    console.log('error is occured');
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
     finally{
        console.log('hello i am finally');
     }  