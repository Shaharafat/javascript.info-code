// 👀 Mixins
/**
 * In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class.

But sometimes that feels limiting. For instance, we have a class StreetSweeper and a class Bicycle, and want to make their mix: a StreetSweepingBicycle.

Or we have a class User and a class EventEmitter that implements event generation, and we’d like to add the functionality of EventEmitter to User, so that our users can emit events.

There’s a concept that can help here, called “mixins”.

As defined in Wikipedia, a mixin is a class containing methods that can be used by other classes without a need to inherit from it.

In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
 */

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

new User("ARAFAT").sayHi();

// 👀 Mixins can make use of inheritance inside themselves.
// class User extends Person{
//   // ...
// }

// Object.assign(User.prototype, sayHiMixin);

let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin2 = {
  __proto__: sayMixin, // (or we could use Object.create to set) the prototype here.
  // __proto__ :Object.create(null,sayMixin),
  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`);
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  },
};

sayHiMixin2.prototype = sayMixin;
console.log(sayHiMixin.__proto__);
class Users {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Users.prototype, sayHiMixin2);


new Users("Dude").sayHi();
