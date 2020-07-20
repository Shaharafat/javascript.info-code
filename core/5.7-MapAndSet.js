let map = new Map(); // 👈 create map

map.set("1", "str1"); // 👀 a string key
map.set(1, "num1"); // 👀 a numeric key
map.set(true, "bool1"); // 👀 a boolean key

// ✋ remember the regular object? it would
// convert keys to string Map keeps the type,
// so, these two are different:
console.log(map.get(1));
console.log(map.get("1"));

console.log(map.size);

console.log(map[true]);

// 👀 iteration over Map
console.log(map.values());

// :hand: map can use object as keys
let john = { name: "john" };
// for every user, let's store their visits count
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));

// 👀 Using objects as keys is one of most notable and important Map features.
// For string keys, Object can be fine, but not for object keys.

let visitcount = {};
visitcount[john] = 1234;
console.log(visitcount[john]); // written as visitcount['[object Object]']

// 👀 chaining
// Every map.set call returns the map itself, so we can “chain” the calls:

console.log(map);
map
  .set(2, "two")
  .set(3, "three")
  .set(4, "four")
  .set(5, "five")
  .set(6, "six")
  .set(7, "seven")
  .set(8, "eight");

console.log(map);
console.log(map.size);

// 👀 Iteration over Map
/*
 * For looping over a map, there are 3 methods:

   * map.keys() – returns an iterable for keys,
   * map.values() – returns an iterable for values,
   * map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

console.log(recipeMap);
console.log(map);

// iterate over keys (vegetables)
for (let vegetables of recipeMap.keys()) {
  console.log(vegetables);
}

// iterate over values (amounts);
for (let amount of recipeMap.values()) {
  console.log(amount);
}

// iterate over [key,value] entries
for (let entry of recipeMap.entries()) {
  console.log(entry);
}

// 👀  Map has built in forEach methods similar to array.
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

// 👀 Object.entries: Map from Object.
// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
let newMap = new Map([
  ["1", "one"],
  ["2", "two"],
  ["3", "three"],
  ["4", "four"],
  ["5", "five"],
]);

console.log(newMap.get("3"));

/*
 * If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.

So we can create a map from an object like this:
*/

let obj = {
  name: "John",
  age: 30,
};
console.log(Object.entries(obj));
let objToMap = new Map(Object.entries(obj));
console.log(objToMap);
console.log(objToMap.get("name"));

// console.log(Object.assign({a:'arafat'},{b:"ball"}));

// 👀 Object.fromEntries: Object from Map
/*
 * There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
 */
// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4],
// ]);

// console.log(prices.banana);

let maps = new Map();
maps.set("banana", 1).set("orange", 2).set("meat", 4);
let objs = Object.fromEntries(map.entries());
console.log(objs.orange);
console.log(objs);
