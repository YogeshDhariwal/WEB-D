// const { createServer } = require('node:http');
// const fs= require("fs");
 //import http from "http"; // for usage of es6 module with having type module
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello W  morld') ;
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
  /** using import statement to use es6 module having  type module in main.js */

//  import {a} from "./mymodule.js";
//  console.log('the value of a is',a);
//  import obj from "./mymodule.js";  // use any name for using default export
//  console.log('the obj contain',obj);

/** using require statement for having type default in main.js */
const a= require("./mymodule2.js");
console.log('a contains',a,__dirname,__filename);
  
         // IMPORTANT FOR INTERVIEW
/** in node js all code is automatically  wrapped inside a  function which contain
 * 
 * function(module,require,export,__dirname,__filename){
 * // module code actually lives here
 * }
 */