// for

for (let index = 0; index <= 10; index++) {
    const element = index
    if (element== 5) {
        // console.log("5 is best");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
        
    }// printing all tables

}

// until inner loop is done the outer dont work

let myArr = ["flash","superman","batman"]
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detacted 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }

// continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detacted 5`);
        continue // skip a condition 
    }
    console.log(`Value of i is ${index}`);
    
}