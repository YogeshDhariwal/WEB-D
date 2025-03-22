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
let arr=[10,4,5,6];
let arr2=[1,4,8];

console.log(arr.concat(arr2));// rturn new array doesnot change existing array
console.log(arr.sort());
// console.log(arr);
let c=arr.slice(0,3);
console.log(c);
// adding deleting inbetween the array  
 arr.splice(1,2);
console.log(arr)
