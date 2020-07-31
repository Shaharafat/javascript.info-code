/**
 * Function Binding
 * When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this"
 */

// 😢 Losing 'this'
// We’ve already seen examples of losing this. Once a method is passed somewhere separately from the object – this is lost.

let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // hello, undefined
/** ☝️
 * That’s because setTimeout got the function user.sayHi, separately from the object.
 */

 // 🔥 solution 1 : a wrapper
setTimeout(function () {
  user.sayHi();
}, 1000);
// 👇 this will change the value of user.sayHi(). to get rid of it
// use bind.
user = {
  sayHi(){console.log('Another user in setTimeout');}
}


// 🔥 solution : 2 bind
// let boundFunc = func.bind(context);
let user2 = {
  firstName : "John",
}

function func() {
  console.log(this.firstName);
}
let funcUser = func.bind(user2);
funcUser();
func.bind(user2)();

// let's try with an object method.
let user3 = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, there ${this.firstName}!`);
  }
}

let sayHi = user3.sayHi.bind(user3);

user3 = {
  sayHi() {
    console.log('another user3 in setTimeout');
  }
} // wont get it. will use previous one.

sayHi();
setTimeout(sayHi,3000)

// 🆒
function funcs(phrase) {
  console.log(phrase + ' ' + this.firstName);
}
funcs.bind(user3, 'Hey boys')()
// or
let store = funcs.bind(user3);
store('arafat');

// 👀 partial functions.
// We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.

// let bound = func.bind(context,[arg1],[arg2],[arg3] ...);
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);
console.log(double(2));;
console.log(double(3, 2)); // only first one will work.


// 👀 Going partial without context
/**
 * 
 * What if we’d like to fix some arguments, but not the context this? For example, for an object method.

  The native bind does not allow that. We can’t just omit the context and jump to arguments.

  Fortunately, a function partial for binding only arguments can be easily implemented.
 */

function partial(func, ...argBound) {
  return function (...args) {
    return func.call(this, ...argBound, ...args);
   }
}

let users = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
}

users.sayNow = partial(users.say, new Date().getHours() + ':' + new Date().getMinutes());
users.sayNow('Hello');