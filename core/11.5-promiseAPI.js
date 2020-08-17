/**
 * Promise.all
Let’s say we want many promises to execute in parallel and wait until all of them are ready.

For instance, download several URLs in parallel and process the content once they are all done.

That’s what Promise.all is for.

The syntax is:

let promise = Promise.all([...promises...]);
Promise.all takes an array of promises (it technically can be any iterable, but is usually an array) and returns a new promise.

The new promise resolves when all listed promises are settled, and the array of their results becomes its result.

For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:
 */

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then(console.log);

let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://api.github.com/users/jeresig",
];

// map every url to the promise of the fetch
// let requests = urls.map((url) => fetch(url));
// // Promise.all waits until all jobs are resolved
// Promise.all(requests).then((responses) =>
//   responses.forEach((response) =>
//     console.log(`${response.url}: ${response.status}`)
//   )
// );

/**
 * If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.

For instance:
 */

 Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
 ])
  .catch(console.log); // Error: Whoops!