function getAverageAge(arr) {
  let i = 0, sum = 0;
  for (elem of arr) {
    sum += elem.age;
    i++;
  }
  return sum / i;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr))