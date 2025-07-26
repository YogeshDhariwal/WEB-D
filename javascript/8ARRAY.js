// array is mutable(changable if want)
// let arr=[1,4,5,7];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0])
// arr[0]=29;
// console.log(arr)
// console.log(typeof arr)
// // converting array to string
// console.log(arr.toString())
// // join 
// console.log(arr.join("  and "))
//pop
// let a=arr.pop();
// console.log(a);
// console.log(arr)
// // push
// console.log(arr.push("yogesh"));// return length of array
// console.log(arr);
// // shift
// let b=arr.shift();
// console.log(b);
// console.log(arr);
// unshift
// arr.unshift("tom")
// console.log(arr);
// // delete 
// delete arr[3];
// console.log(arr);
// let arr=[10,4,5,6];
// let arr2=[1,4,8];

// console.log(arr.concat(arr2));// rturn new array doesnot change existing array
// console.log(arr.sort());
// // console.log(arr);
// let c=arr.slice(0,3);
// console.log(c);
// // adding deleting inbetween the array  
//  arr.splice(1,2);
// console.log(arr)
let arr =[10,15,30,34,45];
console.log('the entered array is ',arr);
console.log(typeof arr);
/** methods used in array  */
/** converting array to strings */
console.log(arr.toString());

/** to joins two array */
console.log(arr.join(" and "));

/** pop method */  // last element got deleted from the array
console.log(arr.pop());
console.log(arr);

/** push method  */
console.log(arr.push("hello "));
console.log(arr);  // add element at the end of array 

/** shift method  */
console.log(arr.shift());// removes element from the starting of array 
console.log(arr);
/** unshift method  */
console.log(arr.unshift("hello 1"));// add elements at the first index of array
console.log(arr);


let arr1=[1,2,3,4,5];
console.log(arr.concat(arr1));// returns new array 
console.log(arr);
/** delete  */

delete arr[4];
console.log(arr); // length is same 
/*** splice  delete element from a certain given position and add at that position */
 console.log(arr.splice(1,3));
 console.log(arr);
 console.log(arr.length)// length not same 
 
 /** slice method   */