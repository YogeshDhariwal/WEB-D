 const fs =require("fs");
 //console.log('all about fs  module',fs);
 
 console.log('starting');
 //fs.writeFileSync("harry.txt","harry is a good human being");

 fs.writeFile("harry2.txt","harry is a good teacher",()=>{

    console.log('done');
    fs.readFile("harry2.txt",(error,data)=>{
        console.log(error,data.toString())   /**  if we want to read and write other files then it will form a callback hell  */

    })
 })

 fs.appendFile("harry.txt","harry is a software engineer",(e,d)=>{
    console.log('file contain:',d);
 })
console.log('ending');