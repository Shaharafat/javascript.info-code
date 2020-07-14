// 👀 splice
let arr = ['I', 'go','home']

delete arr[1]; // remove go
console.log(arr);
console.log(arr.length);


arr = ['I', 'study', 'Javascript'];
console.log(arr);
arr.splice(1, 1);
console.log(arr);


arr = ['I','study','javascript','right','now']
let removed = arr.splice(0,3,"let's","dance")
// ✋ 👀 splice returns the array of removed element.
console.log(removed);
console.log(arr);


// 👀 insert without deleting any element
console.log(arr);
result = arr.splice(2, 0, 'I ', 'am','learning','Javascript')
console.log(result);
console.log(arr);


// negative indexes allowed
arr.splice(-2,0,'React')
console.log(arr);


// 👀 slice
console.log(arr);
// 👀 returns a new array.
result = arr.slice(0,2)
console.log(result);
console.log(arr);

arr = ['t', 'e', 's', 't'];
console.log(arr.slice(1, 3));
console.log(arr.slice(-3,-1));
console.log(arr.slice(-2));

// ✋ call slice without an argument arr.silce() creates a copy
// of arr
console.log(arr.slice());

// 👀 concat
// crates a new array that includes values from 
// other arrays and additional items
/*
 * The method arr.concat creates a new array that includes values from other arrays and additional items.
 * It accepts any number of arguments – either arrays or values.

 * The result is a new array containing items from arr, then arg1, arg2 etc.

 * If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied.
 */

arr = [1, 2];
console.log(arr.concat([3,4,5]));
console.log(arr.concat({ name:'arafat'}));
console.log(arr.concat([3, 4], [5, 6])); // if an argument is an array. then its elments are copied.

console.log(arr.concat([3,4],5,6));

let arrayLike = {
  0: 'something',
  length:1
}

console.log(arr.concat(arrayLike));

// 👀 But if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead
arrayLike = {
  0: 'something',
  1: 'else',
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
console.log(arr.concat(arrayLike)); // treats object as array.


// iterate: forEach
// 👀 arr.forEach(function(item,index,array){
        //function here... 
//    })
["bilbo", "gandalf"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}]`);
});

["bilbo", "gandalf"].forEach(console.log)

// 👀 searching an array.
arr = [1, 0, false];
console.log(arr.indexOf(0));
console.log(arr.indexOf(false));
console.log(arr.indexOf(null));
console.log(arr.includes(1));

// console.log(Object.is(NaN,NaN));
arr = [NaN];
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

// ✋ 👀 find method 
/*
* Imagine we have an array of objects. How do we find an object with the specific condition?

    Here the arr.find(fn) method comes in handy.


    If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.

    For example, we have an array of users, each with the fields id and name. Let’s find the one with id == 1:
*/

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'pete' },
  { id: 3, name: 'Mary' },
]

let user = users.find((item => item.id == 1));
console.log(user.name);

arr = [123,23245,3345,1234,235,]
console.log(arr);
console.log(arr.findIndex(item => item > 235));

// 👀 filter method 
/*
 * The find method looks for a single (first) element that makes the function return true.

    If there may be many, we can use arr.filter(fn).

    The syntax is similar to find, but filter returns an array of all matching elements:
*/

console.log(users);
let someUsers = users.filter(item => item.id < 3)
console.log(someUsers);
console.log(someUsers.length);


// 👀 transform an array
/*
 * map
  The arr.map method is one of the most useful and often used.

  It calls the function for each element of the array and returns the array of results.

*/

let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
console.log(lengths); // returned only the results.

// sort(fn)
/*
  The call to arr.sort() sorts the array in place, changing its element order.

    It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
*/

arr = [1, 2, 15];
arr.sort();
console.log(arr); // ✋ wait, what?

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
// normally sort compares by converting
// all element in string
// use compare function to convert as number.
console.log(arr.sort(compareNumeric));
arr.sort();console.log(arr);
arr.sort(function (a, b) {
  return a - b;
})

console.log(arr);

[1, -2, 15, 2, 0, 8].sort(function (a, b) {
  console.log(a + '<>' + b);
})

// 👀 A comparison function may return any number
let anarr = [4, 21, 1, 5]
  anarr.sort((a, b) => a - b)
console.log(anarr);
  
// ✋ Use localeCompare for strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a.localeCompare(b)));
anarr.reverse();
console.log(anarr);

// ✋ 👀 split and join
let names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ',2); // 👈 look optional argument
console.log(arr);
for (let name of arr) {
  console.log(name);
}

// 👀 split into letters
console.log("test".split(''));

// 👀 array.join()
console.log(arr);
let join = arr.join('; ')
console.log(join);

// 👀 reduce function
arr = [1, 2, 3, 4, 5];
result = arr.reduce((sum, current) => sum + current
)
console.log(result);

// isArray?
console.log(Array.isArray(arr));