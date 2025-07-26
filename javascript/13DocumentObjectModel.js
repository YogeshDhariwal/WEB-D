//** using id selector */
// document.getElementById("box1").style.backgroundColor= " red";
// document.getElementById("box2").style.backgroundColor= " green";
// document.getElementById("box3").style.backgroundColor= " blue";
// document.getElementById("box4").style.backgroundColor= "yellow"
// document.getElementById("box5").style.backgroundColor= "pink"
//*** using class selector */

// let box=document.getElementsByClassName("boxes");
// box[0].style.backgroundColor="red";
// box[1].style.backgroundColor="green";
// box[2].style.backgroundColor="yellow";
// box[3].style.backgroundColor="blue";
// box[4].style.backgroundColor="pink";


/**   RANDOM COLOR GENERATOR */
// let boxes=document.querySelector(".container").children

// function getrandomcolor(){
// let val1=Math.ceil(0+Math.random()*255);
// let val2=Math.ceil(0+Math.random()*255);
// let val3=Math.ceil(0+Math.random()*255);

//    return `rgb(${val1},${val2},${val3})`
// }
// Array.from(boxes).forEach(e=>{
//    e.style.backgroundColor=getrandomcolor();
//    e.style.color=getrandomcolor();
// })

let boxes=document.querySelector(".container").children;

function randomcolorgenreator(){
   let val1=Math.ceil(0+Math.random()*255)
   let val2=Math.ceil(0+Math.random()*255)
   let val3=Math.ceil(0+Math.random()*255)
   return `rgb(${val1},${val2},${val3})`
}

Array.from(boxes).forEach(e => {
   e.style.backgroundColor=randomcolorgenreator();
   e.style.color=randomcolorgenreator();

});