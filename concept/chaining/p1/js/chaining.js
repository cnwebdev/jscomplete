// Array methods 

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const euroToUsd = 1.1;

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUSD = transactions.filter(trans => trans > 0).map(trans => trans * euroToUsd).reduce((accu, trans) => accu + trans, 0);

console.log(totalDepositUSD);