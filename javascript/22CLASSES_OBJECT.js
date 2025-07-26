// let obj={
//     a:1,
//     b:"yogesh"
// }
// console.log(obj);

// let animal ={
//     eats: true
// }
// let rabbit ={
//     jumps: true
// }
// rabbit.__proto__ =animal;// inheritance

class animal{
     constructor(name )  {
        this.name=name;
        console.log('object is created.... and he is ',name);
     }

    eats(){
        console.log('khata hai');  
    }
    jumps(){
        console.log('uchalta hai');
        
    }
}

class loin extends animal {

    constructor(name )  {
       super(name);
        console.log('object is created.... and he is ',name);
     }
}

  let a= new animal("bunny");
  console.log(a);
  let l= new loin("shera")
  console.log(l);
  
  