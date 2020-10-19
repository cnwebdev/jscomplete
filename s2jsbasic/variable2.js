/*************************************************
* Variable and data types
*/

var firstName = "Chris";
var lastName = "N.";
var age;
var birthYear = 1970;
var now = 2020;
age = now - birthYear;

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Age: " + age);

age = 28;

// Type coerction
console.log(firstName + " " + age);

var job, isMerried, status;
job = "Techcher";
isMerried = true;

if (isMerried) {
    status = "yes"
} else {
    status = "no"
}

console.log(firstName + " is " + age + " year old, he is a " + job + ". Is he merried? " + status);

// Variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is " + age + " year old " + job + ", is he married? " + status);

var lastName = prompt("What is your lastname?");
alert(firstName + " " + lastName);