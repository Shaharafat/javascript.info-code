class Animal {
  // static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// 🔥 Inherited from Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];

rabbits.sort(Rabbit.compare);
console.log(rabbits[0].run());
// console.log(Rabbit.planet);
console.log(Rabbit.__proto__ === Animal);
console.log(Rabbit.prototype.__proto__ === Animal.prototype);
console.log(Rabbit.prototype);
console.log(Rabbit.__proto__);
