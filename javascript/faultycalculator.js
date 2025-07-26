 
//  let random=Math.random();
//  console.log(random)
//  let a=prompt("please enter a number")
// let b=prompt("please enter another number")
// let c=prompt("Enter opration used")
// let obj={
//     "+": "-",
//     "*":"+",
//     "-":"/",
//     "/":"**"
// }


// if(random>.4){
// // perform correct operation
// alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
   
// }
// else{
//     // perform wrong operation
//   c=obj[c]
//   alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
// }
/** create a faulty calculator  */
 /**  1. it takes two number as input from the user
  *  2. it performs wrong operations as follows
  *  + ---> -
  *  * ---> +
  *  -  ----> /
  *  / --> **
  * 
  * it performs wrong operations 10% of the times
  */
 let a1=Math.random();
 // console.log('random generated number is '+a);
  if(a1<=.1){
    function add(a,b){
       console.log('the sum of the given number is '+ (a>b?a-b:b-a));
    }
   
    function difference(a,b){
      console.log('the difference of the given number is '+(a/b));
    }

    function multiply(a,b){
      console.log('the multipication of the given number is '+(a+b));
    }

    function divide(a,b){
      console.log('the division of the given number is '+(a**b));
    }
  }
   else{
  
    function add(a,b){
      console.log('the sum of the given number is '+ (a+b));
   }
  
   function difference(a,b){
     console.log('the difference of the given number is '+(a>b?a-b:b-a));
   }

   function multiply(a,b){
     console.log('the multipication of the given number is '+(a*b));
   }

   function divide(a,b){
     console.log('the division of the given number is '+(a/b));
   }
   }
     
   add(4,3);