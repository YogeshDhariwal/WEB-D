import fs from  "fs/promises"

let a= await fs.readFile("harry.txt");
let b= await fs.writeFile("harry.txt","\n\n\n\nthis is a amazing promise");
console.log('this file contain',a.toString(),b);
