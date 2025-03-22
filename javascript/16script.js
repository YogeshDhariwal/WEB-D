let butoon =document.getElementById("btn");
// hepl us to do somethingwhen a particular event occured 
// like on doubl click inner html of ox changes
butoon.addEventListener("dblclick",()=>{
   // alert("hello how are you doing")
   document.querySelector(".box").innerHTML="i am a changed box now"
})
// butoon.addEventListener("contextmenu",()=>{
//     alert("do not right click")
//  })
 butoon.addEventListener("keydown",(e)=>{
   console.log(e,e.key)
 })
