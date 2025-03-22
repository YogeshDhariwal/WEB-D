/** settle means resolve or reject
 * resolve means promise is settled successfully
 * reject means promsie is not settled successfully
 */
// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(29)
//         }, 3000);
//     }
//     )
// }

async function getdata() {
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let data=await x.json();
   console.log(data);
   return data
    // .then(response => response.json())
    // .then(json => console.log(json))
}
async function main() {
    console.log('loading module');
    console.log('doing something else');

    console.log('load data');
    let data = await getdata(); // await used to wait for the getdata function then other script will work
    /** await used inside a async function  */

    console.log(data);
    console.log('process data');
}
main();
/** if we want to wait for data to process and then other things will work then use then function */
// data.then(() => {
//     console.log(data);
//     console.log('process data');
// })

/** js use async wait to wait for data to get
 * async function works in background 
   */