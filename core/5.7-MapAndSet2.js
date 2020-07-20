// 👀 Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let set = new Set();
// ☝️ new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// visits, some users come multiple times.
set.add(john).add(mary).add(pete).add(john).add(mary);

console.log(set);

console.log(set.size);

for (let user of set) {
  console.log(user.name);
}

// Iteration over set
// we can loop over a set either with for..of
// or using forEach
let sets = new Set(['oranges', 'apples', 'oranges', 'bananas']);
console.log(sets);
for (let value of sets) {
  console.log(value);
}

sets.forEach((value, valueAgain, set) => {
  console.log(value,valueAgain,set);
})

console.log(sets.keys());
console.log(sets.values());
console.log(set.entries());


// 👀 map ==> set
let map = new Map();
map
  .set('1', 'one')
  .set('2', 'two')
  .set('3', 'three')
  .set('4', 'four');
  console.log(map);

let seet =new Set(map.entries())
console.log(seet);