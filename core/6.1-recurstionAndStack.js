// 👀 Recursive traversals
let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

// console.log(Object.entries(company));
// console.log(Array.isArray(company));
let sum = 0;
function getSalary(obj) {

  for ([key, value] of Object.entries(obj)) {
  
    if (Array.isArray(value)) {

      for (data of value) {
        sum += data.salary;
      }

    } else {
      getSalary(value);
    }

  }
  
  return sum;
}

console.log(getSalary(company));
