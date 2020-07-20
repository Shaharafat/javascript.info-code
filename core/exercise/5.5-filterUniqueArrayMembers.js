function unique(arr) {
  let uniqueArr = [];
  for (data of arr) {
    if (uniqueArr.includes(data)) {
      continue;
    }
    uniqueArr.push(data);
  }
  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings));
