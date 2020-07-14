let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(36));
console.log(2314567875432..toString(36));


// 👀 Rounding.
console.log(Math.floor(3.1));
console.log(Math.floor(-1.1))
  

console.log(Math.ceil(3.1));
console.log(Math.ceil(-1.1));

console.log(Math.round(3.1));
console.log(Math.round(3.5));


console.log(Math.trunc(3.4534));


// 👀 for instance we have 1.2345 and want to round it to
// digits, getting only 1.23.

// 1. Multiply and divide
let n = 1.23456;
console.log(Math.floor(n * 100) / 100);

console.log(n.toFixed(2));

// toFixed round the number to n digits after 
// the point and returns a string representation of the result.

console.log(1.34.toFixed(1)); // string
console.log(+1.35.toFixed(1)); // number

console.log(0.1 + 0.3);


// 😄
console.log(9999999999999999);

console.log(-0,0);

console.log(isNaN(NaN));
console.log(isNaN('str'));
console.log(NaN == NaN);

console.log(isNaN("15"));
console.log(isNaN(15));

console.log(isFinite('15'));
console.log(isFinite(NaN));
console.log(isFinite(15));
console.log(isFinite(Infinity));
// Sometimes isFinite is used to validate whether a string value is a regular number:
console.log(0 === -0);
console.log(Object.is(0,-0));
console.log(Object.is(NaN,NaN));

console.log(parseInt('10px'));
console.log(parseInt('10$'));

// console.log(parseFloat(1.23.4.53.5));

// parseInt / parseFloat NaN

console.log(parseInt('a123'));

// 👀 second argument of parseInt
// parseInt(str,radix)
console.log(parseInt('ff', 16));

// 👀 other math functions

console.log(Math.random());
console.log(Math.max(4,21,54,32,6,21));
console.log(Math.min(432,213,56,12,612,63,126));
console.log(Math.pow(2,10));