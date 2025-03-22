// console.log("i am calculating factorial");
// let c=parseInt(prompt("Enter a number for which the factorial is"));
//  function factorial(n){
//     if(n==0 || n== 1){
//         return 1;
//     }
//     return n*factorial(n-1);
//  }
//  let f=factorial(c);
//  console.log("the factorial of a given no is",f);  

 // another way of solving problem
let a=3;
function factorial(number){
  let arr=  Array.from(Array(number+1).keys())
 
 let c=arr.slice(1).reduce((a,b)=>{
    return a*b
})
   return c;
}

console.log(factorial(a));