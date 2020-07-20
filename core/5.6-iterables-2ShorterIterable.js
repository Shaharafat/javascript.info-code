let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  
  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
}

for (let num of range) {
  console.log(num);
}

// 👀 Infinite iterators

// Infinite iterators are also possible. For instance, the range becomes infinite for range.to = Infinity. Or we can make an iterable object that generates an infinite sequence of pseudorandom numbers. Also can be useful.

// There are no limitations on next, it can return more and more values, that’s normal.

// Of course, the for..of loop over such an iterable would be endless. But we can always stop it using break.

// 👀 String is iterable
// Arrays and strings are most widely used built-in iterables.

// For a string, for..of loops over its characters:

for (let char of 'test') {
  // triggers 4 times: once for each character.
  console.log(char);
}

// 👀 👀 also works correctly with surrogate pairs!
let str = "🤕 👀 🎷";
for (let char of str) {
  console.log(char);
}

// 👀 calling an iterator explicitly.
let strs = 'Hello';

// does the same as 
// for(let char of str) log(char)
let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

// Both iterables and array-likes are usually not arrays, they don’t have push, pop etc. That’s rather inconvenient if we have such an object and want to work with it as with an array. E.g. we would like to work with range using array methods. How to achieve that?

// 👀 👀 Array.from
// There’s a universal method Array.from that takes an iterable 
// or array - like value and makes a “real” Array from it.
// Then we can call array methods on it.

let arrayLike = {
  0: 'hello',
  1: 'world',
  length: 2,
}

let arr = Array.from(arrayLike);
console.log(arr);

// same as with iterable
arr = Array.from(range);
console.log(arr);

// full syntax for Array.from() is
// ✋ Array.from(obj,[, mapFn, thisArg])
// The optional second argument mapFn can be a function 
// that will be applied to each element before adding 
// it to the array, and thisArg allows us to set this for it.
arr = Array.from(range, num => num ** 2);
console.log(arr);

// 👀  string to Array using Array.from()
let strss = '👀✋🌟😠'
let chars = Array.from(strss);
console.log(chars);
console.log(chars[0]);
console.log(chars[1]);
console.log(chars.length);

