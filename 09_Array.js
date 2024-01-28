const arr = [2,3,4,5,6,7]
// console.log(arr);

// const heros = arr

// heros.push(10)
// console.log(arr);

// Array Methods++++++++++++

// arr.push(22)
// arr.push(7)
// arr.pop()

// arr.unshift(2)
// arr.shift()

// console.log(arr.includes(6));//true or false
// console.log(arr.indexOf(6)); // return index

// const arr1 = arr.join() // convert to string
// console.log(arr);
// console.log(arr1); // type string

//slice

console.log('A ', arr);
const myarr = arr.slice(0,3)
console.log(myarr);
console.log('B ', arr);

const myarr1 = arr.splice(0,3)
console.log(myarr1);
console.log(arr);

// slice gives us a different array from the range but dont change orignal array
// but splice gives us the new array and also manipulate the orignal array

