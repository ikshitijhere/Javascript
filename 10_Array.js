const marvalheros = ["thor","iron-man","spider-man"]
const DCheros = ["Batman","superman","flash"]

// marvalheros.push(DCheros);
// console.log(marvalheros);

// const allheros = marvalheros.concat(DCheros)
// console.log(allheros);

const allnewheros = [...marvalheros,...DCheros]
// console.log(allnewheros);

const anotherarr = [1,2,3,[4,5,6,7],8,[9,4,[3,7]]]

const arr  = anotherarr.flat(Infinity)
console.log(arr);


console.log(Array.isArray("Kshitij"))
console.log(Array.from("Kshitij"))


