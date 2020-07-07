let salaries = {
  John: 100,
  Ann: 160,
  Pete: 390
}

let sum = 0;
for (let key in salaries) {
  if (salaries[key] === null || salaries[key] === undefined) {
    salaries[key] = 0;
  }
  sum += salaries[key];
}
console.log(sum);
