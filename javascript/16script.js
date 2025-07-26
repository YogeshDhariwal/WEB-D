// let butoon =document.getElementById("btn");
// // hepl us to do somethingwhen a particular event occured 
// // like on doubl click inner html of ox changes
// butoon.addEventListener("dblclick",()=>{
//    // alert("hello how are you doing")
//    document.querySelector(".box").innerHTML="i am a changed box now"
// })
// // butoon.addEventListener("contextmenu",()=>{
// //     alert("do not right click")
// //  })
//  butoon.addEventListener("keydown",(e)=>{
//    console.log(e,e.key)
//  })
let butt=document.getElementById("btn");
butt.addEventListener("mouseover", ()=>{
 //alert("hello someone clicked me");
  //  document.querySelector(".box").innerHTML="<b>hey i was clicked by someone</b>"
//alert("please click me for more update");
})
butt.addEventListener("click",()=>{

  open("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")
})
/**keyboard */
butt.addEventListener("keydown",( e)=>{
  alert("hello someone press key on keyboard");
  console.log(e.key);
})

/** form events */
document.querySelector(".box").addEventListener("focusin",()=>{
 alert("hey bro you are on full focus")

})