

document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation();// to stop event bubbling
    alert("child was clicked")
})
document.querySelector(".childcontainer").addEventListener("click",()=>{
    alert("childcontAiner was clicked")
})
document.querySelector(".container").addEventListener("click",()=>{
    alert("container was clicked")
})

// repeating a function after a set time interval
function getrandomcolor(){
    let val1=Math.ceil(0+Math.random()*255);
    let val2=Math.ceil(0+Math.random()*255);
    let val3=Math.ceil(0+Math.random()*255);
    
       return `rgb(${val1},${val2},${val3})`
    }
// let a=setInterval(()=>{
// document.querySelector(".child").style.background=getrandomcolor();
// },500);
// console.log(a);

// use of clear interval to stop
//*** use of settimeout run only once after a certain time */
let a=setTimeout(()=>{
    document.querySelector(".child").style.background=getrandomcolor();
    },5000);
    console.log(a);