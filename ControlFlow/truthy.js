const useremail = []
                 // here we assume that value ha isly wo true hojata ha
if (useremail) { // aur agar ham empty string pass karde it will assume false
    console.log(`got user eamil`);
}else{
    console.log("Dont have email");
}

// Truthy and false value 
 //FALSE VALUES 
 // -false,0,,-0,bigInt 0n,"",null,undifined,NaN
 // all other are tru values
 // -true,"0",'false'," ",[],{}, function(){}

 if (useremail.length === 0) { // how to check a array 
    console.log("Array is empty");
 }

 const emptyobj = {}

 if (Object.keys(emptyobj).length === 0) { // to check a empty object
    console.log("Empty Object");
 }