let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

console.log(map);
// Error: keys.push is not a function
keys.push("more");
console.log(keys);