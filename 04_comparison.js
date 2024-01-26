// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// the reason is that equality check == and comparison ><>=
// <= work differently.
// comparisons conver null to number, treating it as 0
// thats why (3)null>=0 is true and null>0 is false.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// === values and datatypes

console.log("2" === 2);