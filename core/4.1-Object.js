const users = {
  name: 'arafat',
  roll: 354
}

console.log(users.name);
console.log(users.roll);

let fruit = 'apple';
let fol = {
  [fruit]: 5,
}

console.log(fol.apple);

// 🔴 dot notation donot support this types of assignments.
let userEat = {
  data: 5
}
// ✋ donot do this 👇
userEat.fruit;
console.log(userEat.fruit);

// 👀 property shorthand
function makeUser(name, age) {
  return {
    name: name,
    age:age,
  }
}

let user = makeUser('john',30)
console.log(user.name);

// 👇 shorthand
function mkUser(name, age) {
  return {
    name,
    age
  }
}

let usr = mkUser('arafat',23)
console.log(usr.name);
console.log(usr.age);

// 👀 find using in operator

console.log('name' in users);
console.log('roll'in users);



