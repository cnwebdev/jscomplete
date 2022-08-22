// Array methods 

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const euroToUsd = 1.1;

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = transactions.reduce(function (accu, curr, i, arr) {
  console.log("Interation", i, accu);
  return accu + curr;
}, 0);
console.log("total = ", balance);


// fine largest number in transactions
const findMax = transactions.reduce((accu, trans) => {
  if (accu > trans) {
    return accu;
  } else {
    return accu = trans;
  }
}, transactions[0]);
console.log("max = ", findMax);