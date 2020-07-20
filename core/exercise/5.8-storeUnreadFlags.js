let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let isRead = Symbol.for('readMsg');

let readMessage = new WeakSet();

messages[0][isRead] = false;
messages[1][isRead] = false;

readMessage.add(messages[0]);
readMessage.add(messages[1]);
// readMessage.add(messages[2]);

console.log(readMessage.has(messages[0]));

messages.shift();

console.log(readMessage.has(messages[1]));