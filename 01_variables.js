const accountId = 144553
let accountEmail = "kshitij@gmail.com"
var accountPass = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2 not allowed

accountEmail = "Chavan@gmail.com"
accountPass = "909090"
accountCity = "Delhi"
console.log(accountId)

/*
Prefer not to use Var because of issue in 
block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState])