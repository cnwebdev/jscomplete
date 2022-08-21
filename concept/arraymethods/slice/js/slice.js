// Array methods

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr);
console.log(arr.slice(2)); // remove the first 2 elements a, and b

console.log("before - array name arr", arr);
const newArr = arr.slice(); // slice without function parameter will just retrun a new slice
console.log('after - const newArr = arr.slice();', newArr); // newArr is a new array with the same content from arr array

console.log('before newArr', newArr);
console.log('after newArr.slice(2, 4)', newArr.slice(2, 4)); // remove elements in front of index 2 and after index 4 = index 2, 3 is remain

console.log('before', newArr);
console.log('after newArr.slice(-2)', newArr.slice(-2));  // remove every thing except the last 2 elements

console.log('before', newArr);
console.log('after newArr.slice(1, -2)', newArr.slice(1, -2));

console.log('before - newArr', newArr);
console.log('after - newArr.slice(-1);', newArr.slice(-1));

