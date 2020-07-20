// 👀  WeakSet
// WeakSet behaves similarly:

// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it is reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.
// Being “weak”, it also serves as an additional storage. But not for an arbitrary data, but rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

// For instance, we can add users to WeakSet to keep track of those who visited our site:

let visitedSet = new WeakSet();

let john = { name: 'John' };
let pete = { name: 'pete' };
let mary = { name: 'Mary' };

visitedSet.add(john).add(pete).add(john);

// visitedSet has 2 users now.

// check if john visited?
console.log(visitedSet.has(john));
console.log(visitedSet.has(mary));

john = null;

console.log(visitedSet.has(john));