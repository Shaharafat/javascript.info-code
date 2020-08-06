// The 'extend' keyword
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still`);
  }
}

let animal = new Animal("My animal");
// console.log(animal.run(5));

/**
 * And we would like to create another class Rabbit.

  As rabbits are animals, Rabbit class should be based on Animal, have access to animal methods, so that rabbits can do what “generic” animals can do.

  The syntax to extend another class is: class Child extends Parent.

  Let’s create class Rabbit that inherits from Animal:
 */

class Rabbit extends Animal {
  // 👀 by default 
  // constructor(...args) {
  //   super(...args);
  // }

  // 🔥 but for own constructor.
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name} hides!`);
  }

  // 🔥 super.stop()
  /**
   * Usually we don’t want to totally replace a parent method, but rather to build on top of it to tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

    Classes provide "super" keyword for that.

    super.method(...) to call a parent method.
    super(...) to call a parent constructor (inside our constructor only).
   */
  stop() {
    super.stop(); // 👀 call parent stop
    this.hide(); // and then hide
  }
  
}

let rabbit = new Rabbit('White Rabbit',10);
console.log(rabbit.run(5));
// console.log(rabbit.hide());
console.log(rabbit.stop());
console.log(rabbit.name);
console.log(rabbit.earLength);
