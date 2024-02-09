
// var c = 300
// let a = 300 // Global scope
// { } // Scope
// if (true) {
//     let a = 10
//     const b = 20
    // var c = 30
    // console.log("INNER :", a); // block scope
// }
// everthing we write in scope should only be in scope 

// console.log(a); not defined 
// console.log(b); // not defined
// console.log(c); // it should not be used bcoz it can be acess anywhere

// console.log(a);

// when we check scope in browser its different and in node environment its different


function one(){
    const user = "KShitij"

    function Two(){
        const website = "Youtube"
        console.log(user); 
    }
    // console.log(website); //  we cannot acess inner function 
                           // bada cannot get icecream from chota

   Two() // when ever we call functions a call stack is created
         // this also called closers 
         // child can acess parent 

}
// one()

// if(true){
//     const user1 = "Kshitij"
//     if(user1 == "Kshitij"){
//         const website = "Youtube"
//         console.log(user1 + website)
//     }
//     console.log(website) // we cant acess as its scope is in if
// }
// console.log(user1) // its not in scope

// ####################INTERESTING CONCEPT ####################
console.log(add1(5))c// 


function add1(val){
    return val + 1
}


// see same thing do differently

// this is a function but also called expression
// js are very powerful like json,object and etc

const addtwo = function(val){
    return val + 2
}
console.log(addtwo(5)) //  but we can call it in upper function declaration
                    // the function that is to variable
