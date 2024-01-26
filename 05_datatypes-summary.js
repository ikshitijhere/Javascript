 // Primitive datatypes
 // 7 types : - Sting-number-boolean-null-undifined-symbol-BigInt

 // Javascript is a Dynamically typed language
 const score = 100
 const scoreval = 100.3

 const loggedin = false
 const temp = null //empty
 let userEmail; //undifined

 const id = Symbol('123')
 const id1 = Symbol('123')
 console.log(id === id1);//false

 const bignum = 882728738281781113n //Bigint


 // Reference (Non-primitive)
 // Array-objects-Functions

 const heros = ["Shaktiman","Superman","Ironman"];//array //Object datatypes
 let Obj ={
    name : "kshitij",
    age : 20,
 }//object datatype

 let myFun = function(){
   console.log("Hello Javasript");
 } //function Object

 console.log(typeof Obj);