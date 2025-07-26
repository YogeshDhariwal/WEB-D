/** Javascript is a for giving language because it always try to show less error and let the code irrespective of error  */
console.log("hey i am using string in javascript")
let s="yogesh";
console.log("this is the writen string using javascript",s);
console.log(s[0])
console.log(s[1])
console.log(s[2])
console.log(s[3])
console.log(s[4])
console.log(s[5])
console.log("lenght of string is:",s.length);
let realname="harrry"
let friend="raman"
console.log("his  name is "+realname+" and his friend name is "+friend)
// template literals

console.log(`His name is ${realname} and his friends name is ${friend}`)
console.log(`hello i am using template literals to use "doublequote" inside a string `);

// escape sequence
// to use " " " like this we use \ as escape sequence use to introduce some characters 
let names="roh\"an"
console.log(names)
let b="Jaatram"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(0,5))// 0 is included in output but not 5
console.log(b.slice(1))
console.log(b.replace("ram","ram ram"))// replace something from the string
console.log(b.concat(realname,"yogesh"))// add two string or more in a given string using concardinate

/***** string is immutable we can not change string after allocating memory but we can change it by forming new string*/