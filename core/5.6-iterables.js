// 👀 Iterables
/*
 * Iterable objects is a generalization of arrays. That’s a concept that allows us to make any object useable in a for..of loop.

  Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.

  If an object isn’t technically an array, but represents a collection (list, set) of something, then for..of is a great syntax to loop over it, so let’s see how to make it work.
*/

// ✋Symbol.iterator
/*
 * We can easily grasp the concept of iterables by making one of our own.

 * For instance, we have an object that is not an array, but looks suitable for for..of.

 * Like a range object that represents an interval of numbers:
*/

/*
 * To make the range iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

 * When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.

 * Onward, for..of works only with that returned object.

 * When for..of wants the next value, it calls next() on that object.

 * The result of next() must have the form {done: Boolean, value: any}, where done=true means that the iteration is finished, otherwise value is the next value.
*/

let range = {
  from: 1,
  to: 5
};

// 1. call to for...of initially calls this.
range[Symbol.iterator] = function () {
  // ✋ it returns the iterator object:
  // 👀 2. Onward, for...of works only with this 
  // iterator, asking for its next.

  return {
    current: this.from,
    last: this.to,

    // 👀 3. next() is called on each iteration by
    // the for...of loop.
    next() {
      // 👀 4. it should return the value as an object 
      // {done:... , value: ...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  }
}

for (let num of range) {
  console.log(num);
}
