"use strict";

// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create method in side the constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // }
};

// thanh instantiates Person object
const thanh = new Person("Thanh", 1991);
console.log(thanh);

// 1. Enw {} is created

// 2. function is called, this = {}

// 3. {} link to prototype

// 4. function automatically return {}

const mike = new Person("Mike", 1991);
const the = new Person("The", 1995);
console.log(mike, the);

console.log(thanh instanceof Person); // return true or false

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}

thanh.calcAge();
mike.calcAge();
the.calcAge();