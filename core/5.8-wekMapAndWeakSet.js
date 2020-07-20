// let obj = {name:'arafat'}
// let map = new Map();
// map.set(obj,'arafat');
// console.log(map);


// 👀 WeakMap
// :hand: The first difference from Map is that WeakMap keys must be objects, not primitive values:

let weakMap = new WeakMap();
let obj = {};
let john = { name: 'John' };
weakMap.set(obj, 'ok').set(john, '...'); // works fine (object key)

// can't use a string as the key.
// weakMap.set('test', 'whoops'); // 👈 🔴 error, because 'test' is not an object 



console.log(weakMap.has(john));
john = null; // removes john form map
console.log(weakMap.has(john));

/**
 * WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

  WeakMap has only the following methods:

  weakMap.get(key)
  weakMap.set(key, value)
  weakMap.delete(key)
  weakMap.has(key)
  Why such a limitation? That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified when the cleanup happens.

  The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically the current element count of a WeakMap is not known. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.
 */

//  👀 Use case: additional data
/*
 * The main area of application for WeakMap is an additional data storage.

  If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

  We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well
*/




