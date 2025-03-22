console.log("hello world")
//**** 1.using class selector in DOM *****
// let box=document.getElementsByClassName("boxx")
// box[2].style.backgroundColor= "red"

/**    using id selector  *****/
// let box=document.getElementById("red");
// console.log(box);
// box.style.backgroundColor="red"
document.getElementById("red").style.color= "red "

/**  using querry selector in DOM   ****/
// it work on only first element 
// document.querySelector(".boxx").style.backgroundColor="green"

 // **** for all element we use 
document.querySelectorAll(".boxx").forEach(e=>{
    e.style.backgroundColor="red";
})
