// let id = Symbol("id");
// let id2 = Symbol('id');
// console.log(id === id2);
// console.log(id.description);
// console.log(id);

// console.log(id.toString());


// 👀 Hidden properties
let user = {
  name: 'john'
};
let id = Symbol('id');

user[id] = 1;

console.log(user[id]);

/*
 *What’s the benefit of using Symbol("id") over a string "id"?

 * As user objects belongs to another code, and that code also works with them, we shouldn’t just add any fields to it. That’s unsafe. But a symbol cannot be accessed accidentally, the third-party code probably won’t even see it, so it’s probably all right to do.

 * Also, imagine that another script wants to have its own identifier inside user, for its own purposes. That may be another JavaScript library, so that the scripts are completely unaware of each other.
*/

// 👀 symbol in literal
let id2 = Symbol('id')

let users = {
  name: 'john',
  [id2]:123 // not 'id:123'
}

// Symbols are skipped by for ... in

for (let key in users) {
  console.log(key); // symbol id ignored
  
}

console.log(Object.keys(users)); // id ignored.

// 👀 Object.assign() works perfectly with symbols.
let clone = Object.assign({},users)
console.log(clone);

// 👀 Global Symbols
/*
 * As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

 * To achieve that, there exists a global symbol registry. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.

 * In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

 * That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.
*/

let name = Symbol.for('myName');

let anotherName = Symbol.for('myName');

console.log(name === anotherName);

// 👀 Symbol.keyFor
/*
 * For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call: Symbol.keyFor(sym), 
 * that does the reverse: returns a name by a global symbol.
*/

let sym = Symbol.for('name')
let sym2 = Symbol.for('id');

console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym2));
