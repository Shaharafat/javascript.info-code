// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => {
//     results.forEach((result, num) => {
//       if (result.status = 'fulfilled') {
//       console.log(`${urls[num]}: ${result.value.status}`);
//       }
//       if (result.status == 'rejected') {
//         console.log(`${urls[num]}: ${result.reason}`);
//       }
//   })
// })

// waits for only  the first setteled promise and gets its result (or error)
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
]).then(console.log); // 1