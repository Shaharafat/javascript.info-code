`use strict`

function makeUser() {
  return {
    name: 'John',
    ref:this;
  }
}

let user = makeUser()
console.log(user.ref.name);

// 👇 correct version.
function makeUsers() {
  return {
    name: 'John',
    ref() {
      return this;
    }
  }
}
let users = makeUsers();
console.log(users.ref().name);
