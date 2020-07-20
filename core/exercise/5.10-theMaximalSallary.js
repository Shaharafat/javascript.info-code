let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let entries = Object.entries(salaries);
  let greater = 0;
  let topPaid = null;

  for ([name, salary] of entries) {
    if (salary > greater) {
      topPaid = name;
      greater = salary;
    }
  }

  return topPaid;
}

console.log(topSalary(salaries))