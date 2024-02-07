
function saymyname(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// saymyname// this is refrences 
// saymyname() // with parenthisis this is calling funtion execution

// function addtwonum(num1,num2){ // in defination we call it parameters
//   console.log( num1 + num2);
// }
function addtwonum(num1,num2){ // in defination we call it parameters
//    let res =  num1 + num2
//    return res 
   return num1 + num2 // another method to return
   console.log("kshitij"); // ntg will print after return statement
  }
const res = addtwonum(3 , 5) // when we pass value to functions its known as argument
// console.log(res);

function loginusermsg(username = "Sam"){ // we can asloe pass default value if ntg is passed then it will print that val
                                         // and if a new value is passed through calling it'll override that value
     //undifined is a false value
    if (!username) { // we can also use ! that will convert true to false and false to true
        console.log("Please enter a username");
        return // even we dont return anything it itll just return the process back and dont exectute anything further
    }
    return `${username} just logged in`
}

// loginusermsg() // not only calling 
console.log(loginusermsg("Kshitij")) 