'use strict'

// functions example

const fname = "Mike";
const lname = "McNillin";
let job = "Tennis Coach";

// object literal
const person = {
    fname: fname,
    lname: lname,
    job: job,
}

// function declaration
function printName() {
    console.log(fname, lname, job); 
    console.log(person);
}

// function expression
const printPerson = function() { 
    console.log(fname, lname, job);
    console.log(person);
}

// call printName function
printName();
printPerson();