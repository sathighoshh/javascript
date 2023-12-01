/*
primitive(7 types) :- String, Number , Boolean , null
 undefined , Symbol, BigInt

/*
Reference (Non Premitive) :- Array, Objects,functions
*/
const score = 100
const scoreValue = 10.3
const isloggedIn = false
const outSideTemp = null
let useremail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log((id===anotherId));

const bigNumber = 123456782343348277n
//NON PRIMITIVE :-
//array :
const heroes =["shaktiman" , "naagraj" , "doga"];
//Object :
let myObj = {
    name : "sathi",
    age : 22,
}
//function :
const myFunction = function(){
    console.log("hello world");
}

//stack memory(primitive),heap memory(Non Primitive)

let myEmail = "sathighoshsathi3@gmail.com"
//let  anotherName =myEmail 
let anotherName = "sathig.cse.jisu2021@gmail.com"
console.log(myEmail);
console.log(anotherName);

let userOne ={
    email : "s12@gmail.com",
    upi : "123@ybl",
}
//console.log(userOne);

let userTwo = userOne
userTwo.email = "s6767@gmail.com"
console.log(userOne);
console.log(userTwo);
