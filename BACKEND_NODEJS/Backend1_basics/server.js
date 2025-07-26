// console.log('hey hello world');
// var slugify = require('slugify')

// let a=slugify('some string') // some-string
// console.log(a);
// // if you prefer something other than '-' as separator
// let b=slugify('some string&&&%%', '_')  // some_string
// console.log(b);

console.log('hey world hello');
var slugify=require("slugify")

let a=slugify("some string")
console.log(a);

let b=slugify("some string %% 2335","_")
console.log(b);