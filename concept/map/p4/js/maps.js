// Array methods - map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const euroToUsd = 1.1;

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

const transactionUSD = transactions.map(trans => trans * euroToUsd);

console.log(transactions);
console.log(transactionUSD);

const transactionsUSDloop = [];
for (const trans of transactions) {
  transactionsUSDloop.push(trans * euroToUsd);
  console.log(transactionsUSDloop);
}

const transactionDescriptions = transactions.map((trans, i) => `transaction ${i + 1}: You ${trans > 0 ? 'deposted' : 'withdrew'} ${Math.abs(trans)}`);
console.log(transactionDescriptions);