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

// 👀property names can be any string or symbols
// other types are automatically converted to string.
let objs = {
  0 : "test"
}

console.log(objs[0]);
console.log(objs["0"]);



//  👀 for...in loop
// To walk over all keys of an object, there exists a special 
//form of the loop: for..in. This is a completely different 
//thing from the for(;;) construct that we studied before.

// for (key in object) {
//   // execute the body for each key among object properties.
// }

let userss = {
  name: 'John',
  age: 30,
  isAdmin : true
}

for (let key in userss) {
  console.log(key);
  console.log(user[key]);
}
