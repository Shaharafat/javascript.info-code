let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let map = new WeakMap();
map.set(messages[0],`${new Date()}`)
console.log(map.get(messages[0]));

messages.shift();

console.log(map.get(messages[0]));