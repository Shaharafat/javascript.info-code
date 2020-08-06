// 🔥 private '#'


// privates should start with #. they are only accessible from inside the class.

// class CoffeeMachine{
//   #waterLimit = 200;
//   #checkWater(value) {
//     if (value < 0) throw new Error("Negative water");
//     if (value > this.#waterLimit) throw new Error('Too much water');
//   }
// }

// let coffeeMachine = new CoffeeMachine();
// coffeeMachine.#checkWater(); // error.

/** 🔥 🔥
 * On the language level, # is a special sign that the field is private. We can’t access it from outside or from inheriting classes.

Private fields do not conflict with public ones. We can have both private #waterAmount and public waterAmount fields at the same time.

For instance, let’s make waterAmount an accessor for #waterAmount:
 */

class CoffeeMachine{
  #waterAmount = 0;
  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error('Negative water');
    this.#waterAmount = value;
  }

 }

let machine = new CoffeeMachine();
machine.waterAmount = 100;
