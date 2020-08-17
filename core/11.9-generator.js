/**
 * Generators
Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.
 */

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
 }

let generator = generateSequence();

// console.log(generator.next());
// console.log(JSON.stringify(generator.next()))

for (data of generator) {
  console.log(data);
}

// generators are iterable
let sequence = [0, ...generateSequence()];
console.log(sequence);

// using generators for iterables
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++){
      yield value;
    }
  }
}

console.log([...range]);

// 🔥generator composition

// yield* to composite 
function* generateSeq(start, end) {
  for (let i = start; i <= end; i++){
    yield i;
  }

}

function* generatePasswordCodes() {
  // 0-9 
  yield* generateSeq(48, 57); // same as 👇
  // for (let i = 48; i <= 57; i++) yield i;

  // A-Z
  yield* generateSeq(65, 90);

  // a-z
  yield* generateSeq(97, 122);
}

let str = '';
for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code)
}

console.log(str);

// yield is a two way street
// can also pass values inside the generator.
function* gen() {
  // pass a question to the outer code and wait for an answer
  let result = yield '2+2 = ?'; // *

  console.log(result);

  let result2 = yield '3+3 = ?'

  console.log(result2);
} 

let generators = gen();
let question = generators.next().value;
console.log(question);
generators.next(4).value;
generators.next(9).value;

try {
  generators.throw(new Error('error in generator'));
}
catch (e) {
  console.log(e);
}





