const name  = "Kshitij"
const repo = 5

console.log(name+repo+"Value");

//String interpolations
console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameid = new String('Kshitij-here')

console.log(gameid[0]);
console.log(gameid.__proto__);

console.log(gameid.toUpperCase());

//doesn't change the orignal value remember the stack and heap lesson

console.log(gameid.charAt(1));
console.log(gameid.indexOf('K'));

const newstr = gameid.substring(0,7)
console.log(newstr);
//also negative can given to slice
const anotherstr = gameid.slice(-8,1)
console.log(anotherstr);

const newstr1 = "   kshitij    "
console.log(newstr1);
console.log(newstr1.trim());//remove start and end empty space

const url = "https://kshitij.com/kshitij%20chavan"

console.log(url.replace('%20','-'))
console.log(url.includes('00'))

console.log(gameid.split('-')); 