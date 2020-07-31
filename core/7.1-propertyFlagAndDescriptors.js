/**
 * The method Object.getOwnPropertyDescriptor(object,propertyName)
 * allows to query the full information about a property.
 */

let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(descriptor, null, 2));

// to change the flags, we can use Object.defineProperty

// 🔥 Object.defineProperty(obj,propertyName,descriptor)

/**
 * If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.
 */
Object.defineProperty(user, "roll", {
  value: 230,
});
descriptor = Object.getOwnPropertyDescriptor(user, "roll");
console.log(descriptor); // without value, other properties are false.

// 👀 non-writable
Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Arafat"; // non writable. // 👀 👀 silently ignores error
console.log(user.name); // john

let users = {};
Object.defineProperty(users, "name", {
  value: "John",
  // for new property we need to explicitly list what are true.
  enumerable: true,
  configurable: true,
});

console.log(users.name);
users.name = "arafat"; // error

// 👀 Non-enumerable
let user2 = {
  name: "John",
  toString() {
    return this.name;
  },
};

// By default, both our properties are listed.
for (let key in user2) {
  console.log(key); // name toString
}

// making toString non-enumerable
Object.defineProperty(user2, "toString", {
  enumerable: false,
});

for (let key in user2) {
  console.log(key); // name
}
console.log(Object.keys(user2));

// 👀 👀 Non-configurable
/**
 * The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.

A non-configurable property can not be deleted.
 */

descriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // non-configurable ,non-enumerable.
console.log(descriptor);

/**
 * 🔥
 * Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.

To be precise, non-configurability imposes several restrictions on defineProperty:

      Can’t change configurable flag.
      Can’t change enumerable flag.
      Can’t change writable: false to true (the other way round works).
      Can’t change get/set for an accessor property (but can assign them if absent).
 */

let user3 = {};
Object.defineProperty(user3, "name", {
  value: "john",
  writable: false,
  configurable: false, // 👀
});

// Object.defineProperty(user3, "name", {
//   configurable: true,
//   writable: true,
// });

console.log(Object.getOwnPropertyDescriptor(user3, "name"));

// define many properties using Object.defineProperties 👀 👀
Object.defineProperties(user3, {
  roll: { value: 20, writable: false },
  surname: { value: 'Arafat', writable: false }
})

console.log(Object.getOwnPropertyDescriptors(user3));