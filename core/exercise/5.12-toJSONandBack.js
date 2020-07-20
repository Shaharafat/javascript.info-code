let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);
console.log(json);
let parsed = JSON.parse(json);
console.log(parsed);