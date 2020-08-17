fetch('https://no-such-server.blabla')
  .then(response => response.json(), rej => console.log('error from then'))
  .catch(err => console.log('error from catch'))
  /**
   * As you can see, the .catch doesn’t have to be immediate. It may appear after one or maybe several .then.

Or, maybe, everything is all right with the site, but the response is not valid JSON. The easiest way to catch all errors is to append .catch to the end of chain:
   */

fetch('./article/promise-chaining/user.json')
  .then(res => res.json())
  .then(user => fetch(`https://api.github.com/users/${user.name}`))
  .then(res => res.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
}))
  .catch(error => console.log(error.message))

  let prom = new Promise((res,rej) => res('message from executor'))
prom.then(res => { blalal() })
.then(res=>console.log('from 3rd then'),rej=>console.log('hurr'))
  .catch(
  console.log('error from catch')
)
  .catch(
  console.log('error from catch2')
)