// 🔥 class syntax...

// class MyClass {
// class methods
//   constructor() { ... }
//   method1() {...}
//   method2() {...}
//   method3(){...}
//   ....
// }

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}
// Usage:
let user = new User("John");
user.sayHi();

/**
 * When new User("John") is called:

 * A new object is created.
 * The constructor runs with the given argument and assigns this.name to it.
 */

// 👀 No comma between class methods

class syntax {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
console.log(typeof syntax); // 👈 function

/**
 * What class User {...} construct really does is:

 * Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).

 * Stores class methods, such as sayHi, in User.prototype.
 */

// class is a function
console.log(typeof User);

// or, more precisely, the constructor method
console.log(User == User.prototype.constructor);

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi);

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype));

// 🔥 Not just a syntactic sugar
/**
 * Sometimes people say that class is a “syntactic sugar” (syntax that is designed to make things easier to read, but doesn’t introduce anything new), because we could actually declare the same without class keyword at all:
 * 
 * The result of this definition is about the same. So, there are indeed reasons why class can be considered a syntactic sugar to define a constructor together with its prototype methods.

  Still, there are important differences.

  First, a function created by class is labelled by a special internal property [[FunctionKind]]:"classConstructor". So it’s not entirely the same as creating it manually.

 * Also, a string representation of a class constructor in most JavaScript engines starts with the “class…”

 *Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

That’s good, because if we for..in over an object, we usually don’t want its class methods.

 * Classes always use strict. All code inside the class construct is automatically in strict mode.
 */
console.log(syntax); // class

// 👀 Class Expression
// Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc.

let User2 = class {
  sayHi() {
    console.log("Hello");
  }
};

// Similar to Named Function Expressions, class expressions may have a name.
// If a class expression has a name, it’s visible inside the class only:

// "Named Class Expression"
let user3 = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class.
  }
};
new user3().sayHi();

// We can even make classes dynamically “on-demand”,

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

let user4 = makeClass("Hello");
new user4().sayHi(); // 👈 👀 look.

// class getter Setters
/**
 * Just like literal objects, classes may include getters/setters, computed properties etc.

Here’s an example for user.name implemented using get/set:
 */

class User5 {
  constructor(name) {
    //invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short");
      return;
    }
    this._name = value;
  }
}

let user5 = new User5('John')
console.log(user5.name);
console.log(user5.name);

// Technically, such class declaration works by creating getters and setters in User.prototype.

// 🔥 Computed Names [...]
class User6 {
  ['say' + 'hi']() { // 👈 computed
    console.log("hello");
  }
}

new User6().sayhi()

// 🔥 class fields
/**
 * Previously, our classes only had methods.

  “Class fields” is a syntax that allows to add any properties.

  For instance, let’s add name property to class User:
 */

class User7 {
  name= 'John'; // class fields

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
  
 }

//  new User7().sayHi() // unsupported in Node
// 👀 👀 🔥 So, we just write " = " in the declaration, and that’s it.

// The important difference of class fields is that they are set on individual objects, not User.prototype

// 🔥 Making bound methods with class fields

/**
 * As demonstrated in the chapter Function binding functions in JavaScript have a dynamic this. It depends on the context of the call.

 * So if an object method is passed around and called in another context, this won’t be a reference to its object any more.
 */

class Button {
  constructor(value) {
    this.value = value;
   }

  // click() {
  //   console.log(this.value);
  // }
  // 👇 
  // class fields to solve
  click = () => {
    console.log(this.value);
  }
 }

let button = new Button('hello');
setTimeout(button.click, 100) // button.click will loose it this.

/**
 * The problem is called "losing this".

  There are two approaches to fixing it, as discussed in the chapter Function binding:

  Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).
  Bind the method to object, e.g. in the constructor.
 */