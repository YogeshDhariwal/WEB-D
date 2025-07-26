// function nice(name){
// console.log("hey"+name+"you are the best coder")
// console.log("hey"+name+ "i am a good coder")
// console.log(name+" have a new tshirt")
// console.log("yogesh is the best in the world")
// }
// nice("harry")
// function yogi(surname){
//     console.log("my name is yogesh "+ surname);
// }
// yogi("dhariwal")
// function sum(a,b,c=5 )
// {
//     console.log("sum of two argument is :",a*b+c)
// }
// sum(5,9);
// // variable as a function
// const func1 =(x)=>{
// console.log("i am an arrow function",x)
// }
// func1(45);
// const func2=(x1)=>{
// console.log("hello how are you",x1)
// }
// func2(5);
/**functions  */

function nice(name) {
    console.log('hey ' +name+' you are nice');
    console.log('hey i know are the best ' + name);
    
}
nice("yogesh");

/** sum function */
function sum(a,b,c=3){
   // console.log('the sum of these number is ' +(a+b));
    return (a+b+c);
    
}
   result=sum(4,7);
   console.log('the sum of the given number is '+result);
   
   /** arraw function */
    funct1 =(x)=>{
        console.log('hey this is an arrow function '+x);
    }
    funct1(45);

    function pass(funct1){
        console.log('hello a function is passsed as argument'+funct1);
    }
    pass(funct1);