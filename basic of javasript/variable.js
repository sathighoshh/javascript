const accountId = 144553
let accountEmail="sathig.csejisu2021@gmail.com"
var accountPassword = "12345"
accountCity="Kolkata"
/*we can declare a  variable before defining it's datatype 
but it's not a good way to define to variable so we use "let" 
for decalring a variable and for constant we declare"const" 
keyword
*/
let accountState;
//accountId = 2 //not allowed

accountEmail="sg@gmail.com"
accountPassword= "212121"
accountCity = "bangalore"
//console.log(accountId);
/*
prefer not to use var because an issue in block Scope and functional Scope.
*/
console.table([accountId,accountCity,accountEmail,accountPassword,accountState]);