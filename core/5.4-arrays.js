let fruits = ['Banana']
let arr = fruits;
arr.push('orange')
console.log(fruits);
fruits[9999] = 5;
fruits.age = 25;
console.log(fruits);

for (key in fruits) {
  console.log(key);
}

// 👇 array.length property is writable
fruits.length = 1;
console.log(fruits);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[0][1]);
fruits.push('apple')

fruits.push('apple')
fruits.push('apple')
fruits.push('apple')
fruits.push('apple')

console.log(fruits.toString());


// ✋ 👀 Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

// When the binary plus "+" operator adds something to a string, it converts it to a string as well

console.log([] + 1);
console.log([1] + 1);
console.log([1,2] +1);