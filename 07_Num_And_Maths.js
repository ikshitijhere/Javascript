// const score = 400
// const balance = new Number(100)

// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

// const anothernum = 123.8999

// console.log(anothernum.toPrecision(3));

// const num = 100000
// console.log(num.toLocaleString('en-IN'));

//++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.3)); // highest value taken
// console.log(Math.floor(4.9)); // lowest value taken no matter the point value
// console.log(Math.sqrt(25));

// console.log(Math.min(4,3,0,10));
// console.log(Math.max(4,3,0,10));

//Random

console.log(Math.floor(Math.random()*10) + 1); // Wrap and add 1 so no 0 value will come

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min) 
// here we have taken min and maximum value so now we know
//that we wnat value between 10 and 20 so first we'll do the 
// same random *10 we get a range between 0-9 +1 so we dont get 0
// before this we added floor as we know floor takes only the minimum 
// value ...ok now we multiply random * max-min so we get a range between
// range and add + min so we get more than minimum value....


function Send(Limit){
    OTP = ''
    for(let i = 0;i<Limit;i++){
     OTP += Math.floor(Math.random()*10)
    }
    return OTP;
 }
 
 console.log(Send(3))
