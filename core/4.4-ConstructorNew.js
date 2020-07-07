/*
  When a function is executed with new, it does the following steps:

  * A new empty object is created and assigned to this.
  * The function body executes. Usually it modifies this, adds new properties to it.
  * The value of this is returned.
*/

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// 👀 constructor mode test : new.target
// Inside a function, we can check whether it was called 
// with new or without it, using a special new.target property.

function User() {
  console.log(new.target);
}

User()
new User()

/*
 * That can be used inside the function to know whether it was called with new, “in constructor mode”, or without it, “in regular mode”.
*/

function Users(name) {
  if (!new.target) { // if you run me without new
    return new Users(name);  // I will add new for you
  }
  this.name = name;
}

let John = Users('John')
console.log(John.name);


// 👀 Return from constructors
/*
 *Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

 * But if there is a return statement, then the rule is simple:

 * If return is called with an object, then the object is returned instead of this.
 * If return is called with a primitive, it’s ignored.
 * In other words, return with an object returns that object, in all other cases this is returned.
*/

function BigUser() {
  this.name = 'John';
  return { name: 'Arafat' }; // 👉 returns this object.
}

console.log(new BigUser().name);

function SmallUser() {
  this.name = 'John';
  return; // 👉 returns this
}

console.log(new SmallUser().name);


// 👀 Methods in constructor.
function lateUser(name){
  this.name =name;
  this.sayHi = function () {
    console.log(`My name is ${this.name}`);
  }
}

let john = new lateUser('john')
john.sayHi();