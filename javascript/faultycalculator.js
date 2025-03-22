 
 let random=Math.random();
 console.log(random)
 let a=prompt("please enter a number")
let b=prompt("please enter another number")
let c=prompt("Enter opration used")
let obj={
    "+": "-",
    "*":"+",
    "-":"/",
    "/":"**"
}


if(random>.4){
// perform correct operation
alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
   
}
else{
    // perform wrong operation
  c=obj[c]
  alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
