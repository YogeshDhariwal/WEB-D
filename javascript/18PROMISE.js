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
//for more then 1 promises we use .all as an array
     
// console.log('this is promise');

//           let prom1=new Promise((resolve,reject)=>{

//             let a=Math.random();
//             if(a<.5){
//                 reject("no random number  was supporting you")
//             }
//             else{
//            setTimeout(() => {
//             console.log('yes i am done');
//             resolve("yogesh")
//            }, 1000);}
//           })
        
//           prom1.then(a=>{
//             console.log(a);
//           }).catch((err)=>{
//             console.log(err);
//           })

//           let prom2=new Promise((resolve,reject)=>{

//             let a=Math.random();
//             if(a<.5){
//                 reject("no random number  was supporting you 2")
//             }
//             else{
//            setTimeout(() => {
//             console.log('yes i am done2');
//             resolve("yogesh 2")
//            }, 1000);}
//           })
        
//    let p3= Promise.all([prom1,prom2])
//    p3.then((a)=>{
//     console.log(a);
//    }).catch((e)=>{
//     console.log(e);
//    })