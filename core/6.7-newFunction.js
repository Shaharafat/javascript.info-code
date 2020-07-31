let func = new Function('a', 'b', 'return a+b');
console.log(func(2, 3));

let sayHi = new Function('console.log("hello")')
sayHi();

function getFunc() {
  let value = 'test';
  let func = new Function('console.log(value)');
  return func;
}
let value = 'global value';
getFunc()(); // because the [[Environment]] of func is global. so it cant get the value variable.