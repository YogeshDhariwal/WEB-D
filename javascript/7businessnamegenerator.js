// form a business name generator with help of adjcetive ,shop name,another word
/**
 *  adjective
 * crazy,amazing,fire
 * 
 * shop name
 * engine,foods,garment
 * 
 * another word
 * bros
 * limited
 * hub
 */

// function getAdjective(a) {
//     // Use conditional checks to determine the adjective
//     if (a > 1) {
//         return 'crazy';
//     } else if (a < 0) {
//         return 'amazing';
//     } else {
//         return 'fire';
//     }
// }

// function getShopName(c) {
//     // Use conditional checks to determine the shop name
//     if (c > 1) {
//         return 'engine';
//     } else if (c < 0) {
//         return 'foods';
//     } else {
//         return 'garment';
//     }
// }

// function getAnotherWord(d) {
//     // Use conditional checks to determine the other word
//     if (d > 1) {
//         return 'bros';
//     } else if (d < 0) {
//         return 'limited';
//     } else {
//         return 'hub';
//     }
// }

// function generateBusinessName() {
//     // Get input from user
//     let a = parseInt(prompt("Enter a number for adjective (greater than 1, less than 0, or 0 for default):"));
//     let c = parseInt(prompt("Enter a number for shop name (greater than 1, less than 0, or 0 for default):"));
//     let d = parseInt(prompt("Enter a number for another word (greater than 1, less than 0, or 0 for default):"));

//     // Get the values for adjective, shop name, and another word based on input
//     let adjective = getAdjective(a);
//     let shopName = getShopName(c);
//     let anotherWord = getAnotherWord(d);

//     // Combine them to form a business name
//     console.log(adjective + " " + shopName + " " + anotherWord);
// }

// // Run the function to generate the business name
// generateBusinessName();

function adjective(a){

    if(a>1){
        return "crazy";
    }
    else if(a<1){
        return "amazing";
    }
    else{
        return "fire"
    }
}

function shopname(b){
    if(b>1){
        return "engine";
    }

    else if(b<1){
        return "foods";
    }
     else{
        return "garments";
     }
}
 
function anotherword(c){
    if(c>1){
        return "bros"
    }
    else if(c<1){
        return  "limited";
    }

    else{
        return "hub";
    }
}

function generateBusinessName(){
    let a=parseInt(prompt("enter a number 1,greater than 1 ,less than 1 etc"));
    let b=parseInt(prompt("enter another number 1,greater than 1 ,less than 1 etc"));
    let c=parseInt(prompt("enter another number 1,greater than 1 ,less than 1 etc"));

  let x=  adjective(a);
  let y=  shopname(b);
   let z= anotherword(c);

     console.log(`the name of shop is ${x} ${y} ${z}`);
}
 generateBusinessName();