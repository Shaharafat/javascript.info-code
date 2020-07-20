// example
/*
 * For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.

Here’s an example of a counting function with Map:
*/

// 📁 visitsCount.js
// let visitsCountMap = new Map(); // map: user=>visits

// // increase the visits count
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// 📁 main.js
// let john = { name: 'john' };
// countUser(john); // count his visits

// later john leaves us 
// john = null;

/*
 * Now john object should be garbage collected, but remains in memory, as it’s a key in visitsCountMap.
*/

/* 👀 
  We need to clean visitsCountMap when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures.
*/

// 👀 👀 we can avoid it switching to weakMap instead

let visitsCountMap = new WeakMap(); // weakmap:user =>visits count

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let john = { name: 'john' };
countUser(john);

countUser(john);
countUser(john);
countUser(john);
countUser(john);
countUser(john);
countUser(john);
countUser(john);
countUser(john);
countUser(john);
countUser(john);
console.log(visitsCountMap.get(john));
john = null;


console.log(visitsCountMap.get(john));