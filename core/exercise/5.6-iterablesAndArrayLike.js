//  👀 iterables and array-likes
// There are two official terms that look similar, but are very different. Please make sure you understand them well to avoid the confusion.

// Iterables are objects that implement the Symbol.iterator method, as described above.
// Array-likes are objects that have indexes and length, so they look like arrays.
// When we use JavaScript for practical tasks in browser or other environments, we may meet objects that are iterables or array-likes, or both.

// For instance, strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).

// But an iterable may be not array-like. And vice versa an array-like may be not iterable.

// For example, the range in the example above is iterable, but not array-like, because it does not have indexed properties and length.

// And here’s the object that is array-like, but not iterable:

let arrayLike = {
  0: 'Hello',
  1: 'world',
  length: 2
};

// for (let item of arrayLike){} // 👈 error. (no Symbol.iterator)