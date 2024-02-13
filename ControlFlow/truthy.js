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

 // NULLISH COALESCING OPERATOR (??): NULL UNDEFINED

 let val1

//  val1 = 5 ?? 10
//  val1 = null ?? 10 // here itll be a function jo db se data lega

val1 = undefined ?? 15 // this operator is only made for null and undifined

val1 = null ?? 10 ?? 15 // the first value it gets got assigns
 console.log(val1); // its basically for when we get values from db 
                    // sometimes its like agar koi db se value nhi aye 
                    // toh null asign krdo ya pher undifined krdo

// TERNIARY OPERATOR

// condition ? true : false

const iceteaprice = 100;
iceteaprice <= 80 ? console.log("Less than 80 ") : console.log("MOre than 80");

