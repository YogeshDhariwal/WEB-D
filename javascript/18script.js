/** javascript asychronous in nature means if there any function which is asychronous then it will be delayed for all script to be read first */

console.log("i am a hacker")
setTimeout(() => {
    console.log("i am inside a settimeout function")
}, 2000);// this will execute et end
console.log("rohan is a hecker")

/***callback function */
const callback = (arg) => {
  console.log(arg);
}

const loadscript = (src,callback) =>{
  let sc=  document.createElement("script");
    sc.src=src;
    sc.onload =callback("yogesh")
    document.head.append(sc);
}
loadscript("https://www.bing.com/search?q=youtubbe&gs_lcrp=EgRlZGdlKgcIABBFGMIDMgcIABBFGMIDMgcIARBFGMIDMgcIAhBFGMIDMgcIAxBFGMID0gELMjM2MjU4OWowajGoAgSwAgE&FORM=ANNAB1&PC=NMTS", callback)
