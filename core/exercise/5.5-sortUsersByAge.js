let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge(users) {
  users.sort((user1, user2) => {
    return user1.age - user2.age;
  })
}

sortByAge(arr);
console.log(arr);