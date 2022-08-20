// Create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Create a veriable to hold the sum
let sum = 0;

function add(number) {
  sum += number;
}

// Loop over the array, incrementing the sum veriable
numbers.forEach(add)

// print the sume variable
console.log(sum);