import path from "path"

let mypath="c:\Users\Avita\Desktop\WED D\BACKEND_NODEJS\harry.txt"
//console.log('path module contaian',path);

console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));

console.log(path.join("c:\\","WEB D\\harry2.txt"))