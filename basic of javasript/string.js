const name = "sathi"
const count = 100

//console.log(name + count +"Value");

console.log(`hellow my name is ${name} and my count is ${count}`);

const gameName = new String('sathi-ghosh')
/*
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
*/
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "    sathi    "
console.log(newString1);
console.log(newString1.trim());
const url = "https://sathi.com/sathi%20ghosh"
console.log(url.replace('%20' , '-'));
console.log(gameName.split('i'));