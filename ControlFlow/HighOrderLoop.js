// For of loop for array

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greatings = "Hello Javascript"
for (const greet of greatings) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char is ${greet}`);
}

// Maps map holds key value pair remember orignal valus , dont have duplicate values

const map = new Map()
map.set('IN', "India")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "India")

console.log(map);

for (const [key,val] of map) {
    console.log(key,':',val);
}

const myobj ={
    Game1:'NFS',
    GAme2:'Spider-man'
}

// for (const [key,val] of myobj) { // we cannort iterate here with for of loop
//     console.log(key,':',val);
// }

const myobj1 = {
    js : 'Javascript',
    cpp : 'c++',
    rb : 'Ruby',
    swift : 'swift by apple'
}

for (const key in myobj1) { // now we can get the values of objects
 console.log(`${key} shortcut is for ${myobj1[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) { // here we get index as keys 
   console.log(programming[key]);
}

// for (const key in map) { // map is not itearable
//   console.log(key);
// }

// --------------------------For each loop----------------
const coding = ["js","ruby","java","python","cpp"]
// this is a higher order function // call back fun dont have name
// coding.forEach( function(item) {
// console.log(item);
// } )

// coding.forEach( (item)=>{  we can also use arrow function
//     console.log(item);
// } )

// function printme(item){  // this is function that we'll pass as arrgument to foreach
//     console.log(item);
// }
// coding.forEach(printme) // same thing will happen

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr); // a arrow function have all this
// } )


const mycoding = [
    {
        langaugename : "javascript",
        languagefilename : "js"
    },
    {
        langaugename : "java",
        languagefilename : "java"
    },
    {
        langaugename : "python",
        languagefilename : "py"
    },
]

mycoding.forEach( (item)=>{
    console.log(item.langaugename);
} )