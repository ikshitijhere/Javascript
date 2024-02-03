// Two ways to make object

// 1 . Object literals
// Object.create() // constructor method

const mysym = Symbol("key1")

const Jsusers = {
    name: "Kshitij",
    "fullname": "Chavan",
    [mysym] : "key1", // correct way to diclare symbol
    age : 20,
    loc : "Pune",
    email : "kshitij@gmail.com",
    islogged : false,
    lastloggedin : ["Monday","Tuesday"]
}


// two methods to access object
// console.log(Jsusers.email);
// console.log(Jsusers["email"]);
// console.log(Jsusers[mysym]); // correct syntax to access symbol

Jsusers.email = "chavan@chat.com"
// Object.freeze(Jsusers); // with the freeze function no one can change anything in object
Jsusers.name = "Varun" // eg of freeze 
// console.log(Jsusers);

//function are treated as a variable dont give any difference

Jsusers.greeting = function(){
    console.log("Hello Js users");
}

Jsusers.greeting2 = function(){
    console.log(`Hello Js users, ${this.name}`);
}

console.log(Jsusers.greeting());
console.log(Jsusers.greeting2());

// mostly we use . operator for acessing but in some cases we need to use [] bracket