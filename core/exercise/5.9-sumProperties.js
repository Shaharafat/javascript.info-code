let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(salaries) {
  let salariesArr = Object.values(salaries);
  let sum = 0;
  for (salary of salariesArr) {
    sum += salary;
  }
  return sum;
}

console.log(sumSalaries(salaries));