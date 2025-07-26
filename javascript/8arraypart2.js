// map used for creating a new array by performing some operation
//let arr=[2,5,65,24];
// let newarr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
// }
// console.log(newarr);

// let newarr=arr.map((e)=> {
// return e**2
// })
// console.log(newarr)

/**filter  */
// const greaterthan5=(e)=>{
//   if(e>5){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(arr.filter(greaterthan5))
// reduced method operation perform in contunity
// let arr2=[1,2,3,4]
// const red= (a,b)=>{
// return a*b;
// }
// console.log(arr2.reduce(red));

  let arr=[3,2,5,6,7,10];
   arr.forEach((value,index,arr)=>{
       console.log(value,index,arr);
   })
   /** creating a new contain an existing array using map */
//    let newarr=[ ];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         newarr.push(element**2);
//     }
//     console.log(newarr);

let newarr= arr.map((e)=>{

return e**2;

})
console.log(newarr);       
/**filter  */
 const greaterthanten =(e)=>{
  if(e>10){
    return true;
  }

 }
console.log(newarr.filter(greaterthanten));
/** reduce function */

let arr2=[1,2,3,4,5,6];
const red=(a,b)=>{
return a*b;

}

console.log(arr2.reduce(red));
/** from to create array of any  object */

console.log(Array.from("yogesh"));