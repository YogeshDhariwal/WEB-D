console.log('THIS IS PROMISES');
/** promise of code execution use of .then and .catch */
let promo1= new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("number is not suppporting what you wan");
    }
else{
setTimeout(() => {
    console.log('hello promise');
    resolve("yogesh");
}, 2000);
}
})

let promo2= new Promise((resolve,reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("number is not suppporting what you wan");
    }
else{
setTimeout(() => {
    console.log('hello promise2');
    resolve("yogesh2");
}, 2000);
}
})
let promo3=Promise.allSettled([promo1,promo2] )
    promo3.then((a)=> {
  console.log(a);
}).catch((err)=>{
    console.log(err);
    
})
// for more then 1 promises we use .all as an array