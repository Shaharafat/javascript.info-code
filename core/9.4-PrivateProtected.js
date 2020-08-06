// // 🔥 protecting 'waterAmount'
// class CoffeeMachine{
//   waterAmount = 0; // the amount of water inside

//   constructor(power) {
//     this.power = power;
//     console.log(`Created a coffee-machine, power: ${power}`);
//   }
// }

// // create the coffee machine
// let coffeeMachine = new CoffeeMachine(100);

// // add water
// coffeeMachine.waterAmount = 200;

// waterAmount and power are public ☝️

// 🔥 let's change waterAmount property to protected to have more control over it. For instance we don't want anyone to set it below zero.
// protected properties are usually prefixed with an underscore _.
/**
 * That is not enforced on the language level, but there’s a well-known convention between programmers that such properties and methods should not be accessed from the outside.
 */

// class CoffeeMachine{
//   _waterAmount = 0;

//   set waterAmount(value){
//     if (value < 0) throw new Error('Negative water');
//     this._waterAmount = value;
//   }

//   get waterAmount(){
//     return this._waterAmount;
//   }

//   constructor(power){
//     this._power = power;
//   }
// }
 
// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = -10;

// 🔥 read only 'power'

class CoffeeMachine{

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power
  }
}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
console.log(`power is : ${coffeeMachine.power}W`);

coffeeMachine.power = 25; // ❌ cant set. no setter.
console.log(`power is : ${coffeeMachine.power}W`);

// Getter / setter functions.
// here we used getter/setter syntax
class CoffeeMachine2{
  _waterAmount = 0;
  setWaterAmount(value) {
    if(value<0) throw new Error('Negative water')
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

}

new CoffeeMachine().setWaterAmount(100);