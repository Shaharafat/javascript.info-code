let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  let objArr =  Object.keys(obj)
  let counter = 0;
  for (item of objArr) {
    counter++;
  }
  return counter;
}

// 👇 efficient solution.
function solutionCount(obj) {
  return Object.key(obj).length;
}

console.log(count(user));