"use strict";

const rest = {
   name: "Trang Viet Cusine",
   location: "Tampa, Florida, USA",
   categories: ["Pho", "Com", "Bun", "Mon Chay"],
   startMenu: ["goi cuon", "salad", "cha gio"],
   mainMenu: ["Pho Bo Dac Biet", "Com Thit Nuong", "Bun Cha Gio", "Mi Sao Chay"],
};

let arr = [2,3,4];

let arr2 = [5, 6, 7];

arr = [1,...arr, ...arr2];

console.log(arr);
console.log(arr2);

arr2 = [arr,arr2];

console.log(...arr2);

console.log(2,3,4,5,6);

const comboMenu = [...rest.startMenu, ...rest.mainMenu];

console.log(comboMenu);

const newObj = {...rest};
console.log(newObj);