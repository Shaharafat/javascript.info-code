`user strict`;
// let obj = {
//   get propName() {
//     // getter, the code executed on getting obj.propneme
//   },
//   set propName() {
//     // setter, the code executed on 
//   },
// };

let user = {
  name: 'John',
  surname: 'Smith',
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
}
/**
 * From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties. We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
 */

console.log(user.fullName);
// user.fullName = "test"; // error only getter.
console.log(user.fullName);


// adding user.fullName
let user2 = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}

console.log(user2.fullName);

user2.fullName = 'Shah Arafat'
console.log(user2.fullName);

// 👀 Accessor descriptors
/**
 * get - a function without arguments, that works
 *        when a property is read
 * set - a function with one argument, that is called
 *      when the property is set
 * enumerable
 * configurable
 */
let user3 = {
  name: 'John',
  surname: 'Smith',
};

Object.defineProperty(user3, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  },
  enumerable: true
});

console.log(user3.fullName);
console.log();
for (let key in user3) {
  console.log(key);
}

/**
 * Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.
 */

function User(name, birthday,year) {
  this.name = name;
  this.birthday = birthday;
  this.year = year;
  // age is calculated from the current date and birthday
  Object.defineProperty(this, 'age', {
    // get() {
    //   return `${this.age}`; 
    // },
    // set() {

    //   let todayYear = new Date().getFullYear();
    //   this.age = todayYear - year ;

    // }
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }

  });
 }

let john = new User('John', new Date(1992, 6, 1),30);
console.log(john.birthday);
// john.age(john.birthday.getFullYear());
console.log(john.age);

// let getData = {
//   name: 'arafat',
//   get roll() {
//     return this.roll;
//   },
//   set roll(value) {
    
//   }
// }
// getData.roll = 20;
// console.log(getData.roll);