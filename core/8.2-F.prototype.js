let animal = {
  eats: true
}

function Rabbit(name) {
  this.name = name;
}

// Rabbit.prototype = animal;

let rabbit = new Rabbit('White Rabbit');

console.log(rabbit.eats);
console.log(rabbit.name);
console.log(Rabbit.prototype.constructor == Rabbit);

// 🔥 Default F.prototype, constructor property.
console.log(rabbit.constructor == Rabbit);

// using constructor to create another object.
let rabbit2 = new rabbit.constructor('Black Rabbit');
console.log(rabbit2.name);

/**
 * That’s handy when we have an object, don’t know which constructor was used for it (e.g. it comes from a 3rd party library), and we need to create another one of the same kind.

  But probably the most important thing about "constructor" is that…

  …JavaScript itself does not ensure the right "constructor" value.

  Yes, it exists in the default "prototype" for functions, but that’s all. What happens with it later – is totally on us.

  In particular, if we replace the default prototype as a whole, then there will be no "constructor" in it.
 */

 console.log(Rabbit.prototype.constructor == Rabbit);
 console.log(rabbit.constructor == Rabbit);

//  now do something
Rabbit.prototype = {
  jumps: true
}

console.log(rabbit.constructor == Rabbit);
console.log(Rabbit.prototype.constructor  == Rabbit); // 👈 false. 

Rabbit.prototype = {
  constructor: Rabbit,
  jumps: true
}

console.log(Rabbit.prototype.constructor == Rabbit);
