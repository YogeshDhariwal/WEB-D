/** Q-1 sorting array having students with house name */
// let students=["harry ","raman","yogesh","ravindr","steve smith","pat cummins","suresh raina"]
// let houses=[]
// for (const student of students) {
//     if (student.length<6){
//         houses.push("Gryffinder")
//     }
//     else if(student.length<6 && student.length<8 ){
//         houses.push("hufflepuff")
//     }
//  else if(student.length<8 && student.length<12){
//     houses.push("ravenclaw")
//  }
//  else {
//     houses.push("slythering")
//  }
// }
// console.log(houses);

/**Q-2 double element in array double fisrt duplicate */
//  let arr=[3,5,6,7,3,2]
//  let uniquear=new Set(arr);
//  uniquear.forEach(e => {
//     console.log(e**2);
     
//  });
 
 /**Q-3 append a  reverse string to original string  */
//  function revrsestr(name) {
//     return (name.split('').reverse().join(''))
//  }
//  let s1="yogesh"
//  let s2= revrsestr(s1);
//  console.log(s1.concat(s2));
 
 /**Q-4 passward validate feature attleast contain upper,lower,digit */

//  let character='a'
//   let ascii= character.charCodeAt(0);
//   console.log(ascii);
  
//  function passwardvalidator(passward) {
//     if(passward.length < 8){
//         return ("this is not a valid passward")
//     }
   
//  }
// passwardvalidator("123qqHJWS");

// let housess=["gryffinder","hufflepuff","raavenclaw","sltthernin"];
let students=["yogesh","steve smith","pat cummins","suresh raina ","ms dhoni","maninder singh","cody"];
let houses=[];

  for (const student of students) {
    if(student.length<6){
        houses.push("gryffinder");
    }
     else if( student.length<8){
      houses.push("hufflepuff");
     }

     else if(student.length<12){
        houses.push("raavenclaw");
     }
     else{
        houses.push("slytherin")
     }
  }
 
  console.log('House Name',houses);

