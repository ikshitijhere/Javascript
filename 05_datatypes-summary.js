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

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(primitive) , Heap(Non-primitive)
 let myinstaname = "ikshitij_here"
 
 let anothername =  myinstaname
 anothername = "_kshitij_here"

 console.log(myinstaname);
 console.log(anothername);

 let user = {
  email : "@Google.com",
  upi : "user@ybl"
 }

 let user2 = user

 user2.email = "@yahoo.com"

 console.log(user.email);
 console.log(user2.email);

 // when in the stack the copy of the data is given 
 // but in Heap the address is given that means any number of 
 // variable assigned to the object it points to single object 
 // memory in heap and if any changes made to it reflect in orignal