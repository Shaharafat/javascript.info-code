class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }


}

class Panda extends Animal {
  constructor(name) {
    super("Rabbit");
    this.name = name;
  }

  sayHi() {
    super.sayHi(); // uses [[HomeObject]]
    console.log(`calling from Panda`);
  }
}

let panda = new Panda('Panda');
panda.sayHi()