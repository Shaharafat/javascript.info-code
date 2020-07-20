// 👀 use case: caching
/**
 * Another common example is caching: when a function result should be remembered (“cached”), so that future calls on the same object reuse it.
 */

// using map
// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */obj;

      cache.set(obj, result);
  }

  return cache.get(obj);
}

// now we user process in another file:
// 📁 main.js
let obj = {/* let's say we have an object */ };
let result1 = process(obj); // calculated
// later, from another place of the code...
let result = process(obj); // remembered result taken.
// later, when the object is not needed any more;
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

/* ☝️ 
 * For multiple calls of process(obj) with the same object, it only calculates the result the first time, and then just takes it from cache. The downside is that we need to clean cache when the object is not needed any more.

  If we replace Map with WeakMap, then this problem disappears: the cached result will be removed from memory automatically after the object gets garbage collected.
*/