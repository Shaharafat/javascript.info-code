/*
  * As we already know, a function in JavaScript is a value.

  Every value in JavaScript has a type. What type is a function?

  In JavaScript, functions are objects.

  A good way to imagine functions is as callable “action objects”. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.
*/

// 👀 The 'name' property

// Function objects contain some useable properties
function sayHi() {
  console.log('Hi');
}

console.log(sayHi.name);

let hi = function () {
  console.log('hi');
}

console.log(hi.name);

// it also works if the assignment is done
// via a default value
function f(greeting = function () { }) {
  console.log(greeting.name);
}
f()

// In the specification, this feature is called
// a “contextual name”.If the function does not 
// provide one, then in an assignment it is figured out from the context.


// Object methods have names too:

let user = {
  sayHi() {
    // ...
  },

  sayBye: function () {
    // ....
  }
}

console.log(user.sayHi.name);
console.log(user.sayBye.name);

let arr = [function () { }];
console.log(arr[0].name);

// 👀 The “length” property
// There is another built-in property “length” that returns the number of function parameters, for instance:

function f1(a) { };
function f2(a, b) { };
function many(a, b, ...more) { };
console.log(f1.length);
console.log(f2.length);
console.log(many.length);

/*
  Here we can see that rest parameters are not counted.

  The length property is sometimes used for introspection in functions that operate on other functions.

  For instance, in the code below the ask function accepts a question to ask and an arbitrary number of handler functions to call.

  Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:

  A zero-argument function, which is only called when the user gives a positive answer.
  A function with arguments, which is called in either case and returns an answer.
  To call handler the right way, we examine the handler.length property.

  The idea is that we have a simple, no-arguments handler syntax for positive cases (most frequent variant), but are able to support universal handlers as well:
*/

function ask(question, ...handlers) {
  let isYes = confirm('question');

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

/*
 This is a particular case of so-called polymorphism – treating arguments differently depending on their type or, in our case depending on the length. The idea does have a use in JavaScript libraries.
*/

// 👀 custom properties
// we can add properties of our own

function sayHi() {
  console.log('hi');

  // let's count how many times we run
  sayHi.counter++;
}

sayHi.counter = 0;

sayHi();
sayHi();

console.log(sayHi.counter);

// 👀 Named Function Expression
let say = function func(who) {
  console.log(`Hello ${who}`);
}

say('arafat')

/*
 * There are two special things about the name func, that are the reasons for it:

  It allows the function to reference itself internally.
  It is not visible outside of the function.
*/

let sayhi = function func(who) {
  if (who) {
    console.log(`Hello ${who}`);
  } else {
    func('Guest');
  }
}

sayhi('arafat')
sayhi();

let sayHI = function func(who) {
  if (who) {
    console.log(`Hello ${who}`);
  } else {
    func('Guest');
  }
}

let welcome = sayHI;
sayHI = null;
welcome('arafat')
welcome()