const coding = ["js","ruby","java","python","cpp"]

// const vals = coding.forEach( (item)=> {
//    // console.log(item);
//     return item
// } ) // foreach loop dont return anything
// console.log(vals);

const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.filter( (num)=> num>4 ) // this function also take a call back function
// // in filter we access every item but we need to give a condition 
// // if the condition is true then it'll return otherwise it'll not return
// console.log(newnums);

// const newnum = mynums.filter( (num)=> {
//    return num > 4
// } ) // this will not return becoz of local scope so we need to use return keyword

// console.log(newnum);

// const newnums = [] 

// mynums.forEach( (num)=> {
//     if (num > 4) {
//         newnums.push(num) // using foreach loop
//     }
// } )
// console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// -------------------------------Working With Data-------------

let userbooks = books.filter( (bk)=> bk.genre == 'History' )

userbooks = books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userbooks);

// ------------------------Map---------------------
// this also a call back function
// const newnums = mynums.map( (num)=> num+10)
// console.log(newnums);

// mynums.forEach((num)=>console.log(num+10)) // foreach dont return
----- chaining------
//--------------------------------------------- 
const newnums = mynums
                     .map((num) => num*10 ) // anything that is processed here will pass down
                     .map((num) => num + 1) // in map everything will return
                     .filter((num) => num>=40) // the true false game

console.log(newnums);


// ----------------------Reduce--------------------------

const myNums = [1,2,3]

const initial = 0;
// const mytotal = myNums.reduce(function (accumelator,current) {
//     console.log(`Accumelator ${accumelator} and current val: ${current}`);
//     return accumelator + current
// },initial )
const mytotal = myNums.reduce((accumelator,current) => (accumelator+current),initial)
// using Arrow function
console.log(mytotal);

const shoppingcart = [
    {
        itemname : "Js cource",
        price : 2999
    },
    {
        itemname : "Python",
        price : 999
    },
    {
        itemname : "Mobile Dev",
        price : 5999
    },
    {
        itemname : "Data Science",
        price : 12999
    },
    
]

// Adding all the price of cource
const add = shoppingcart.reduce((accumelator,current) => {
    return accumelator + current.price 
},0 )
console.log(add);