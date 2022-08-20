const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const doubledNumbers = [];

// old for loop
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// Refactor
let doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);
console.log(doubledNumbers);