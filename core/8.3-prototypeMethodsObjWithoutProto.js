let animal = {
  eats: true
};

//create a new object with animal as a prototype

// Object.create has an optional second argument: property descriptors. We can provide additional properties to the new object there, like this:
let rabbit = Object.create(animal, {
  jumps: {
    value:true
  }
}); // prototype is animal
console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit));


console.log(Object.getPrototypeOf(rabbit) === animal);


console.log(Object.setPrototypeOf(rabbit, {}));

console.log(Object.getPrototypeOf(rabbit) === animal);


console.log(rabbit.jumps);


// 👀 very plain object

// As we know, objects can be used as associative arrays to store key/value pairs.

// …But if we try to store user-provided keys in it (for instance, a user-entered dictionary), we can see an interesting glitch: all keys work fine except "__proto__".