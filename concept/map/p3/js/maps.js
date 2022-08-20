const cars = [
  { model: "Buick", price: "Cheap" },
  { model: "Camaro", price: "Expensive" }
];

const prices = cars.map(function (car) {
  const alldata = `${car.model} is ${car.price}`;
  return alldata;
});

console.log(prices);