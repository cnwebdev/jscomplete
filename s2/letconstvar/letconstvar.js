// Let keyword in ES6
let age = 30;  // declare a variable and assign a integer value
console.log(age);
age = 35;  // data mutation in Javascript
console.log(age);

// const keyword in ES6 
const birthYear = 1990;  // declare a constant variable, assigned data cannot be changed
console.log(birthYear);
birthYear = 1991;  // out: Encaught TypeError: Assignment to constant
console.log(birthYear);

// const job;  // Out: Uncaught SyntaxError | const declaration required a data value at assignment
const job = 'Teacher';  // This will work

// Var keyboard in ES5 
var title = "Programmer";
title = "teacher";


