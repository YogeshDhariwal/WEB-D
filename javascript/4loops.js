console.log("i am learning loops")
let a=1
for(let i=0;i<100;i++)
{
    console.log(a+i)
}
// for in loops
let obj={
    name:" steve smith",
    team :" australia",
    runs: 9999

}
for (const key in obj) {
  
        const element = obj[key];
        console.log(key,element);
    
 }
//for of loop
for (const c of "yogesh") {
    console.log(c)
}
let i=0
while(i<6){
    console.log(i)
    i++;
}
//for each loop

// let a=[1,3,5,6]
// a.forEach((value,index,arr)=> {
//     console.log(value,index,arr)
// });
//for in loop
// let obj={
//     a:1,
//     b:2,
//     c:3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element,key)
//     }
// }
// let a=[5,7,9,1];
// for (const element of a) {
//     console.log(element)
// }