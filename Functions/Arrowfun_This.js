const user = {
    username : "Kshitij",
    price : 999,
    
    welcomemsg : function(){
        console.log(`${this.username} ,welcome to website`); // this refer to current contex
        console.log(this);
    }
    // arrow dont have this function
}

// user.welcomemsg() // current context is value that is kshitij
// user.username = "Sam" // we changed the context to Sam
// user.welcomemsg()

// console.log(this); // gives the current context
// here the current context is empty when we comment all above 
// but when we run this in windows it gives window bcoz of that only
// we can use window events 

// function chai(){
//     let username  = "Kshitij"
//     console.log(this.username); // we cannot use "this" in functions it can only
//                                 // be used in Objects
// }
// chai()

// -----------------Arrow FUNCTION-------------

const chai = () =>{
    let username = "Kshitij"
    console.log(this.username); // it still gives undifined we cant use "this"
}
// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2;
// }                             // basic arrow function syntax
// console.log(addtwo(5,5)) 
                             

// const addtwo = (num1,num2) =>  num1 + num2;  //implicit return we dont need to write return


// const addtwo = (num1,num2) => (num1 + num2); // when we use parenthisis 
                                             // we dont need to use return
                                             // but if we use curly bracket
                                             // return keyword is compulsory

                                             // Explicit retrun is jab return 
                                             // key word lagana padta ha


// -----------------------When we want to return a oBject----------------------- 

const addtwo = (num1,num2) => ({username : "Kshitij"}); 
// jab hama object return karna hota ha ham bs object direct pass nhi kr sakta 
// we need to wrap that object into Parenthisis then it will return

console.log(addtwo(5,5))

// example for loops in further secions
const myarr = [2,3,4,5,6]

// myarr.forEach(function() {})
// myarr.forEach(() => {})
// myarr.forEach(() => ())
myarr.forEach((val,index) => {
    console.log(val, index);
}) // self practice

// Ways we can use arrow funstions in Loops
