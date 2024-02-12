// IF statement
const userlogged = true
const temp = 41

if (temp === 40 ) {  // for such special condition we have === that check data type also
    console.log("less than 40");
} else {
    console.log("temp greater than 40");
}
// <,>,<=,>=,==,!=,===,!==

const score = 200

if (score > 100) {
    const power = "fly" // this comes under if scope 
    console.log(`User Power : ${power}`);
}
// console.log(`User Power : ${power}`); // here we cant acess it 


// short hand notation

const balance = 1000

// if (balance > 500) console.log("Test"), // implicit scope we can write multiple lines 
                // console.log("Test 2"); // by just using  a coma but should not use 

// checking multiple conditions

if (balance < 500) {
    console.log("Less than 500");
}else if (balance < 750) {
    console.log("less than 750");
}else if (balance < 900) {
    console.log("less than 900");
}else{
    console.log("Less than 1200");
}

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard) { // checking both conditions should be true
    console.log("Allow to buy cources");
}

if (loggedinfromgoogle || loggedinfromemail) { // anyone should be true 
    console.log("User logged IN");
}
