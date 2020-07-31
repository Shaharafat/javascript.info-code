// 👀 transparent Caching
/**
 * Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other words, for the same x it always returns the same result.

  If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.

  But instead of adding that functionality into slow() we’ll create a wrapper function, that adds caching. As we’ll see, there are many benefits of doing so.
 */

function slow(x) {
  // there can be a heavy CPU-intensive
  // job
  console.log(`called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    // let result = func(x); // ❌ 
    let result = func.call(this, x); // 👈 instead do this
    // console.log(this); 

    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);
console.log(slow(1)); // slow(1) is cached
console.log("Again: " + slow(1)); // the same

console.log(slow(2));
console.log("Again: " + slow(2));

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log(`called with ${x}`);
    return x *this.someMethod();
  },
};

// same code as before;
console.log(worker.slow(1));

// 👀 👀 look... 
worker.slow = cachingDecorator(worker.slow);

// 👇 // Whoops! Error: Cannot read property 'someMethod' of undefined
// console.log(worker.slow(2)); // 👈 👀

/**
 * 🤔 The error occurs in the line (*) that tries to access this.someMethod and fails. Can you see why?

  The reason is that the wrapper calls the original function as func(x) in the line (**). And, when called like that, the function gets this = undefined.
 */

// func.call(context, arg1, arg2);
function sayHi() {
  console.log(this.name);
}

let user = { name: 'John' };
let admin = { name: 'Admin' };

// user call to pass the different object.
sayHi.call(user);
sayHi.call(admin);

function say(phrase) {
  console.log(this.name + ': ' + phrase);
}

say.call(user, 'Hello');


/**
 * Now everything is fine.

  To make it all clear, let’s see more deeply how this is passed along:

  After the decoration worker.slow is now the wrapper function (x) { ... }.
  So when worker.slow(2) is executed, the wrapper gets 2 as an argument and this=worker (it’s the object before dot).
  Inside the wrapper, assuming the result is not yet cached, func.call(this, x) passes the current this (=worker) and the current argument (=2) to the original method.
 */
