async function showAvatar() {
  // read out JSON
  let response = await fetch("./article/promise-chaining/user.json");
  let user = await response.json();

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
  let githubUser = await githubResponse.json();

  // show the avatar
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = 'promise-avatar-example';
  document.body.append(img);

  await new Promise((resolve, reject) => setTimeout(resolve, 3000)); // 👈cool
  img.remove();
  return githubUser;
}


showAvatar().then(console.log);
console.log(showAvatar().then(res => res))
// console.log("hello");
// console.log("world");
// console.log("what?");

// let res = fetch("./article/promise-chaining/user.json")
//   .then((res) => res.json())
//   .then((res) => console.log(res));
// // console.log(res);

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }

}

console.log(new Waiter().wait())

// 🔥 error handling
async function f() {

  let response = await Promise.resolve('2')

  await Promise.reject(new Error('Whoops!'));
  return response;

}

f().then(res => console.log(res)).catch(err => console.log('error occured'))


