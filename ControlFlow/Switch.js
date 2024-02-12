// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "March" // we can also use string to check

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break; // it breaks the loop and if doesnt have break it will not check and print all
    case "Apr":
        console.log("April");
        break;
    
    default:
        console.log("Default");
        break;
}