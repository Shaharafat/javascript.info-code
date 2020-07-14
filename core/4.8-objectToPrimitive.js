// Object to primitive conversion
/*
 *What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?

 * In that case, objects are auto-converted to primitives, and then the operation is carried out.

 * All objects are true in a boolean context. There are only numeric and string conversions.
 
 * The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.

 * As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.
*/

// 👀 to primitive
// ✋ String
let obj = { name: "arafat", roll: 354 }
console.log(obj);
console.log(obj.toString());


console.log(obj.valueOf());

/*
 * To do the conversion, JavaScript tries to find and call three object methods:

  * Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
  * Otherwise if hint is "string"
  * try obj.toString() and obj.valueOf(), whatever exists.
  * Otherwise if hint is "number" or "default"
  * try obj.valueOf() and obj.toString(), whatever exists.
*/

// 👀 toString/valueOf
/*
 * Methods toString and valueOf come from ancient times. They are not symbols (symbols did not exist that long ago), but rather “regular” string-named methods. They provide an alternative “old-style” way to implement the conversion.

  * If there’s no Symbol.toPrimitive then JavaScript tries to find them and try in the order:

 * toString -> valueOf for “string” hint.
 * valueOf -> toString otherwise.
 * These methods must return a primitive value. If toString or valueOf returns an object, then it’s ignored (same as if there were no method).

 * By default, a plain object has following toString and valueOf methods:

 * The toString method returns a string "[object Object]".
 * The valueOf method returns the object itself.
*/

let user = { name: 'john' };
console.log(user);
// alert(user); // [object Object]
console.log(user.valueOf() === user); // returns object itself. // normally [object Object] in alert



let users = {
  name: 'John',
  money: 1000,
  // for hint = 'string'
  toString() {
    return `{name: '${this.name}'}`
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }
}

console.log(users);
console.log(+users);
console.log(users + 500);

// Often we want a single “catch-all” place to handle all primitive conversions. In this case, we can implement toString only, like this:

let users2 = {
  name: 'john',
  toString() {
    return this.name;
  }
}

console.log(users2);
console.log(users2 + 500);

// 👀 In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.

// 👀 👀 Symbol.toPrimitive
obj[Symbol.toPrimitive] = function (hint) {
  // must return a primitive value
  // hind = one of 'string',number,default
}

let ussr = {
  name: 'John',
  money: 1000,

  // Symbol.toPrimitive
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`)
    return hint == 'string' ? `{name: '${this.name}'}` : this.money;
  }

}

console.log(ussr);
console.log(+ussr);
console.log(ussr + 500);


/*
 * Summary
 * The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.

 * There are 3 types (hints) of it:

  * "string" (for alert and other operations that need a string)
  * "number" (for maths)
  * "default" (few operators)
* The specification describes explicitly which operator uses which hint. There are very few operators that “don’t know what to expect” and use the "default" hint. Usually for built-in objects "default" hint is handled the same way as "number", so in practice the last two are often merged together.

 * The conversion algorithm is:

 * Call obj[Symbol.toPrimitive](hint) if the method exists,
 * Otherwise if hint is "string"
 * try obj.toString() and obj.valueOf(), whatever exists.
 * Otherwise if hint is "number" or "default"
 * try obj.valueOf() and obj.toString(), whatever exists.
 * In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for all conversions that return a “human-readable” representation of an object, for logging or debugging purposes.
*/