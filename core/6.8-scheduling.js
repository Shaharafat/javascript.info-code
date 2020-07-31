/*
 We may decide to execute a function not right now, but at a certain time later. That’s called “scheduling a call”.

There are two methods for it:

setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

*/

// 👀 setTimeout

/*
 * let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
  Parameters:

  func|code
  Function or a string of code to execute. Usually, that’s a function. For historical reasons, a string of code can be passed, but that’s not recommended.
  delay
  The delay before run, in milliseconds (1000 ms = 1 second), by default 0.
  arg1, arg2…
  Arguments for the function (not supported in IE9-)
*/
function sayHi() {
  console.log(('Hello'));
}
setTimeout(sayHi, 1000);

// 👀 with arguments
function sayhi(phrase, who) {
  console.log(phrase + ', ' + who);
}

setTimeout(sayhi, 2000, 'hello', 'who');

setTimeout(()=>console.log("func from string"), 3000);

let timerId = setTimeout(() => console.log('timer'), 1000);
// console.log(timerId);

clearTimeout(timerId);
// console.log(timerId);

// 👀 setInterval
/**
 * All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.

To stop further calls, we should call clearInterval(timerId).
 * 
 */

let timer = setInterval(() => console.log('tick'), 2000);
// 🔥 clearInterval
setTimeout(() => clearInterval(timer), 6000);
// ☝️ stops after 6seconds

// 🔥 👀 nested setTimeout
// There are two ways of running something regularly.

// One is setInterval. The other one is a nested setTimeout, like this:

let timId = setTimeout(function ticks() {
  console.log('ticks');
  timId = setTimeout(ticks, 2000);
  // console.log(timId);
}, 2000);
console.log('beetween timeout');

// Nested setTimeout allows to set the delay
// between the executions more precisely than setInterval
// let delay = 5000;
// let set = setTimeout(function request() {
//   // send request
//   if (/* request failed due to server overload */) {
//     delay *= 2;
//   }

//   set = setTimeout(request, delay);
// }, delay);
function func(i) {
  console.log(i);
}
let i = 1;
setInterval(function () {
  func(i++);
}, 100);

let j = 1;
setTimeout(function run() {
  func(j++);
  setTimeout(run, 100);
},100)