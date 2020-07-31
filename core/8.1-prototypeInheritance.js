let animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  }
};

let rabbit = {
  jumps: true,
  
  __proto__: animal,
};

let longEar = {
  earLength: 10, 
  __proto__: rabbit, // 🔥 using __proto__
};

// walk is taken from the prototype chain.
longEar.walk(); // Animal walk
console.log(longEar.jumps);

// 🔥 The value of 'this'
/**
 * 
 * An interesting question may arise in the example above: what’s the value of this inside set fullName(value)? Where are the properties this.name and this.surname written: into user or admin?

 * The answer is simple: this is not affected by prototypes at all.

 * No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

 * So, the setter call admin.fullName= uses admin as this, not user.

 */

// animals has methods
let animals = {
  walk() {
    if (!this.isSleeping) {
      console.log('I walk');
    }
  },

  sleep() {
    this.isSleeping = true;
  }
};

let rabbits = {
  name: 'White Rabbit',
  __proto__: animals,
}

// modifies rabbit.isSleeping
rabbits.sleep();
console.log(rabbits.isSleeping); // 
console.log(animals.isSleeping); // no such property in animals


// 🔥for-in loop
console.log(Object.keys(animals));
console.log(Object.keys(rabbits));

for(let prop in rabbits) console.log(prop); // 👀 counts inherited properties also

// find own property or not
for(let prop in rabbits) {
  let isOwn = rabbits.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`Our: ${prop}`); // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}