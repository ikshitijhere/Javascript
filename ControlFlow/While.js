
// let index = 0
// while (index <=10) {
//     console.log(`VAlues of index is : ${index}`);
//     index++
// }

let myarr = ['flash','batman','superman']
let arr = 0
while (arr < myarr.length) {
    console.log(`Values is : ${myarr[arr]}`);
    arr++
}

let score = 11
do {
    console.log(`Score is :${score}`);
    score++
} while (score<=10);

myarr.forEach((index,val)=>{
    console.log(index,val);
})