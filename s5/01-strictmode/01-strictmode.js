'use strict'; // Function strict mode enabled

const tname = "Frank";

const income = 135000;
const incomeTax = .15; 

function calcNetIncome(income, incomeTax) {
    return income - (income * incomeTax);
}

console.log(calcNetIncome(income, incomeTax));




















