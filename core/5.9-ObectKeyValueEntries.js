// 👀 Object.keys, values, entries

/*
 * In the previous chapter we saw methods map.keys(), map.values(), map.entries().

 * These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.

 * They are supported for:

      * Map
      * Set
      * Array
*/

/*
 * Object.keys, values, entries
    For plain objects, the following methods are available:

   * Object.keys(obj) – returns an array of keys.
   * Object.values(obj) – returns an array of values.
   * Object.entries(obj) – returns an array of [key, value] pairs.
*/

let user = {
  name: "john",
  age: 30,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// 👀 Here’s an example of using Object.values to loop over property values:
for (let values of Object.values(user)) {
  console.log(values);
}

// 👀 transforming objects
let prices = {
  banana: 1,
  orange: 2,
  meat:4,
}

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
)

console.log(doublePrices.meat);