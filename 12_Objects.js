// object single tern
// constructor object

// const tinderuser = new Object() // single tern objcet 
 const tinderuser = {} // no single tern object

 tinderuser.id = "123abc"
 tinderuser.name = "sam"
 tinderuser.loggedin = false

//  console.log(tinderuser);

// giving object into objects

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "kshitij",
            lastname : "Chavan"
        }

    }
}

console.log(regularuser.fullname.userfullname.firstname);
// optional chaining
// if full name doesn't exist
// console.log(regularuser.fullname?.userfullname.firstname);

// combining objects

const obj1 = {1: "a",2:"b",3: "c"}
const obj2 = {4: "a",5:"b",6: "c"}

// const obj3 = { obj1 , obj2} it gives  a object in object thats not good

// const obj3 =  Object.assign({},obj1,obj2) // dont change the output with parentesiss but its a gurenty thata object will return
// console.log(obj3);

// const obj4 = {...obj1,...obj2} // spread operator
// console.log(obj4);

const users = [{
    id : 1001,
    email : "h@gmail.com"
},{

},{

}]
users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser)); // to get all the keys of a object and can 
                                     // can be used in for loop and many other its very imp
console.log(Object.values(tinderuser));// can also get values
console.log(Object.entries(tinderuser)); // gives key value in array

console.log(tinderuser.hasOwnProperty('loggedin'));// to check is that property available


