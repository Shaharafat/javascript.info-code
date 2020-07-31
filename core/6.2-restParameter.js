// ✋ we can use any iterable in spread.
let str = 'hello'
console.log([...str]);
console.log([...str]);
console.log(Array.from(str));


// 👀 Get a new copy of an array/object
let arr = [1, 2, 3];
let arrCopy = [...arr];
console.log(JSON.stringify(arr) == JSON.stringify(arrCopy));

console.log(arr === arrCopy);

arr.push(4);
console.log(arr);
console.log(arrCopy);

// object copying..
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
console.log(objCopy);
console.log({ ...obj });

