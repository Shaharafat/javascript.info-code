let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
  let newObj ={};

  for (data of users) {
    newObj[data.id] = data
  }

  return newObj;
}

let usersById = groupById(users);

console.log(usersById);

// 👇 efficient solution.

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }