const message = '    Hello Javascript Students Whats up    ';
const messageLowerCased = message.toLowerCase();
const messageUpperCased = message.toUpperCase();
const messageNoSpaces= message.trim();
const betterMessage = message.replace('Students', 'Engineers');
const withSubString = message.substring(9, 14);
const mySchool = 'Boca Code';
const myIndex = mySchool.indexOf('Code');
const myString = 'Hello level up students!';
const newString = myString.split(' ')
console.log(newString.reverse());


// console.log(newString);
console.log(myIndex);
console.log(messageNoSpaces.includes("Javascript"));
console.log(messageNoSpaces.endsWith('up'));
console.log(messageNoSpaces.startsWith('Hello'));
console.log(withSubString);
console.log(betterMessage);
// console.log(messageLowerCased);
// console.log(messageUpperCased);
// console.log(messageNoSpaces);
