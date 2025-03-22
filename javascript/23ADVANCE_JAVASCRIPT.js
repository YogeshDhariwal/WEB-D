/**  IIFE */
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

function sum(a, b, c) {
    return a + b + c;
}

(async function main() { /**imidiate invoked function */
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)

    /** DESTRUCTURING  */
    //    let [x,y,...rest]=[1,5,7,4,8,9]
    //    console.log(x,y,rest);

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }
    let { a, b } = obj;
    console.log(a, b);

    /** spread operator */
    let arr = [3, 6, 7];
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr)); // ...arr is spread operator


})()
//    let a = await sleep();
// will not work because await used only inside async function

/** hosting  var a goes to the top of function not value
 * declaration moves to the top the top of code
 */