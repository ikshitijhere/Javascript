// Object destructuring 

const cource = {
    courcename : "Javascript And chai",
    price : 999,
    teacher : "Hitech"
}

// cource.teacher access

// acessing methods
const {teacher: instruector} = cource
// we can also change the name of the element using colen

console.log(instruector);

// react props are used to access but not everytime its used so it directly use {}
// same concept as js given upside (destructuring)
// const navbar = ({comapany}) => {

// }

// navbar(company = "Kshitij")

// when we want to give a work to someone else is called API for us ...
// we get some values from backend in json data wi=hich a object only


// json format object
// {
//     "name": "kshitij",
//     "courcename" : "JS",
//     "price" : "Free"
// }
// array format json init object
[
    {},
    {},
    {}
]