// Array methods - join

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('before - arr', arr);
const newArr = arr.splice();
console.log("after - arr", arr);
console.log('after - arr.splice()', newArr); // return emply array object 

console.log('after - arr.splice(-1);', arr.splice(-1)); // splice will mutate the original array
console.log('arr', arr);

console.log('after - arr.splice(1, 2);', arr.splice(1, 2));
console.log('after', arr);

const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
console.log(arr1);

console.log('after - arr1.reverse();', arr1.reverse()); // the reverse method will mutate the original array

const arr3 = arr.concat(...arr1);
console.log(arr3);

console.log(arr3.join(' - '));
