// Immediately invoked Function Expression (IIFE)

 //to prevent global scope pollution 
(function chai(){
    console.log("DB connected");
})();
// chai()

// ()() // in first parenthisis we wrap the whole function and then for the 
     // call as we used to call by name of function we now only use parenthisis
    // at the end of funtion as shown in given example

// (function chaiaurcode(){ // named IIFE
// console.log("DB connected 2");
// })()    

// WHEN WE WANT TO USE TWO IIFE AT THE SAME TIME WE NEED TO USE SEMICOLEN AT THE FUNCTION END


// how pass a name to a function variable
((name)=>{        // unnamed IIFE
    console.log(`DB connected 2 ${name}`);
    })("Kshitij")  // see this function as a function only 

    

// this will not work even the functions are same 
// so now the problem is bcoz the IIFE dont now where to stop the 
// context for in the case we need to use a ";" at the end of function