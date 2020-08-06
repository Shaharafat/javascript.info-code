class Rabbit { };
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);

// also works with constructor functions.
console.log(new Rabbit() instanceof Rabbit);

let arr = [1, 2, 3, 4];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

/**
 * The algorithm of obj instanceof Class works roughly as follows:

If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). It should return either true or false, and we’re done. That’s how we can customize the behavior of instanceof.

For example:
 */

class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
   }
 }

let obj = { canEat: true };
console.log(obj instanceof Animal);

// console.log(Animal.isPrototypeOf(obj));
class Animals {}
class Rabbits extends Animals {}

let rabbits = new Rabbits();
console.log(rabbits instanceof Animals); // true

console.log(Animals.prototype.isPrototypeOf(rabbits));

// 🔥 Bonus: Object.prototype.toString for the type
let objj = {};
console.log(objj);
console.log(objj.toString());

let s = Object.prototype.toString;
console.log(s.call(123));
console.log(s.call(null));
console.log(s.call(alert));
console.log(s.call([1,2,3]));


// 👀 Symbol.toStringTag
/**
 * The behavior of Object toString can be customized using a special object property Symbol.toStringTag.
 */
let user = {
  [Symbol.toStringTag]: 'User'
}

console.log(Object.prototype.toString.call(user));

// 🔥 
window[Symbol.toStringTag] = 'Window';
XMLHttpRequest[Symbol.toStringTag] = 'XML'

console.log(typeof Object.prototype.toString.call(window));
console.log(Object.prototype.toString.call(XMLHttpRequest));

console.log(typeof "arafat");