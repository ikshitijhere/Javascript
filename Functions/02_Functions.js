// when we dont know how many arrgument aree gonna come

function calculateCarPrice(val1,val2,...num1){ // here the starting two values are in val1,val2 and rest will be in array
    return num1;
}

// for this we have rest operator (... rest operator and also spreed operator)
console.log(calculateCarPrice(200,400,500,880,900))

const user = {
    username : "Kshitij",
    price : 999
}

// when we write a function that uses object we need to take care of 
// is all the accessing members are presnt or not for that we need to
// check it 
function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObject(user);

handleObject({
    username : "Sam",
    price : 999
});

// we can also pass arrays

const mynewarr = [200,400,600,800]

function retrunarray(getarray){

    return getarray[1]
}

// console.log(retrunarray(mynewarr));
console.log(retrunarray([2000,4000,6000,8000])); // we can also pass direct arr

// ------------------------Practice Section----------------------------------

console.log("-----------------------Practice------------------");
function restFun(...num){
    return num;
}

const obj1 = {
    Client : "Suraj",
    Project : "App",
    Price : "9299",
    Loc : "Kolkata"
}

const arr1 = ["kshitij","Omkar","Varurn","Sam"]

function getObj(newObject){
    console.log(`Myself ${newObject.Client} project ${newObject.Project} price ${newObject.Price} location ${newObject.Loc}`);
}

function getarr(newarr){
    return newarr[0,2]
}
console.log(restFun(200,900,400,199));

getObj(obj1)
console.log(getarr(arr1));

