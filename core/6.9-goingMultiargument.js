/**
 * Going multi-argument
Now let’s make cachingDecorator even more universal. Till now it was working only with single-argument functions.

Now how to cache the multi-argument worker.slow method?
 */

let worker = {
  slow(min, max) {
    console.log(`Called with ${min}, ${max}`);
    return min + max; // scary CPU-hogger is assumed.
  },
};

// should remember same-argument calls.
worker.slow = cachingDecorator(worker.slow);

/**
 * 
 * Previously, for a single argument x we could just cache.set(x, result) to save the result and cache.get(x) to retrieve it. But now we need to remember the result for a combination of arguments (min,max). The native Map takes single value only as the key.

There are many solutions possible:

Implement a new (or use a third-party) map-like data structure that is more versatile and allows multi-keys.
Use nested maps: cache.set(min) will be a Map that stores the pair (max, result). So we can get result as cache.get(min).get(max).
Join two values into one. In our particular case we can just use a string "min,max" as the Map key. For flexibility, we can allow to provide a hashing function for the decorator, that knows how to make one value from many.
 */

function cachingDecorator(func, hash) {
  let cache = new Map();

  return function () {
    let key = hashs(arguments);

    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments);

    cache.set(key, result);
    return result;
  };
}

function hashs(args) {
  return args[0] + "," + args[1];
}

worker.slow = cachingDecorator(worker.slow, hashs);
console.log(worker.slow(3, 5));
console.log("Again " + worker.slow(3,5));
/**
 * Now it works with any number of arguments (though the hash function would also need to be adjusted to allow any number of arguments. An interesting way to handle this will be covered below).

There are two changes:

In the line (*) it calls hash to create a single key from arguments. Here we use a simple “joining” function that turns arguments (3, 5) into the key "3,5". More complex cases may require other hashing functions.
Then (**) uses func.call(this, ...arguments) to pass both the context and all arguments the wrapper got (not just the first one) to the original function.
 */

//  func.apply 🔥
