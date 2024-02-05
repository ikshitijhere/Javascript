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

// const obj3 = { obj1 , obj2}

const obj3 =  Object.assign({},obj1,obj2) // dont change the output with parentesiss but its a gurenty thata object will return
console.log(obj3);





