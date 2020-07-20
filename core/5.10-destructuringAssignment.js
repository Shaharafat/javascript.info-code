/*
 * Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. 
 
 * Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.
*/

// 👀 Array Destructuring
let arr = ['Ilya', 'Kantor'];

// destructuring assignment
// sets firstName = arr[0]
// sets surname = arr[1]

let [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

// 👀 it looks great when combined with split 
// or other array - returning methods:

let [firstname, surName] = 'Shah Arafat'.split(' ');
console.log(firstname);
console.log(surName);


// 👀 ignore elements using commas
let ar = ['shah','Arafat','Front-End Developer',]
let [fname, , title] = ar;
console.log(title);

//  👀 assign anything at the left side.
// we can use any assignables at the left side.
let users = {};
[users.name, users.surname] = 'Shah Arafat'.split(' ');
console.log(users.name);

// 👀 looping with entries.
let userss = {
  name: 'John',
  age:30,
}

for (let [key, value] of Object.entries(userss)) {
  console.log(`${key} ${value}`);
}

// 👀 same for a map
let userMap = new Map();
userMap.set('name', 'John').set('age', '30');
for (let [key, value] of userMap.entries()) {
  console.log(`${key} ${value}`);
}

// 👀 swap variable trick
let guest = 'Jane';
let admin = 'Pete';

// 🔥 swap values: make guest = pete, admin = jane;
[guest, admin] = [admin, guest];
console.log(guest);
console.log(admin);

// 👀 The rest '...'
let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
console.log(name1);
console.log(name2);
console.log(rest);
console.log(rest.length);
console.log(...rest);

// 👀 Default values
// If there are fewer values in the array than variables in the assignment, there will be no error. Absent values are considered undefined:
let [fstname, srname] = ['Shah'];
console.log(fstname);
console.log(srname);

// 🔥 if you want a 'default' value to replace 
// the missing one, we can provide it using '='
let [nm = 'Guest', sunam = 'Arafat'] = ["shah"];
console.log(nm);

// 👀 👀 🔥 Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.

// For instance, here we use the prompt function for two defaults. But it will run only for the missing one:

// runs only prompt for surname
let [nme = prompt('name?'),snme = prompt('surname?')] = ['Shah']
console.log(nme);
console.log(snme);

// 👀 👀 💛 Object destructuring
// The destructuring assignment also works with objects.
let options = {
  title: 'Menu',
  width: 100,
  height: 200
};
let { titles, width, height } = options;
console.log(titles);
console.log(width);
console.log(height);

// 👀 If we want to assign a property to a variable with another name, for instance, options.width to go into the variable named w, then we can set it using a colon:
//  {sourceProperty : targetVariable}
let { title: t, width: w, height: h,suname=/*prompt("surname?")*/100 } = options;
// title -> t
// width -> w
// height -> h
console.log(t);
console.log(w);
console.log(h);


let identity = {
  name: 'arafat',
  roll: 123,
  target:'something'
}

// For potentially missing properties we can set default values using "="

//  Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.

// We also can combine both the colon and equality:
let { name: n = 'shah', roll: r = 123, title: tt = 'front end dev' } = identity;
console.log(n);
console.log(r);
console.log(tt);

let { name: nnme, ...reest } = identity;
console.log(nnme);
console.log(reest);

// 👀 👀 nested Destructuring
let option = {
  size: {
    widh: 100,
    heiht: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines
let { size: { widh, heiht }, items: [item1, item2], tit = "menu" } = option;
console.log(widh);
console.log(heiht);
console.log(item1);
console.log(item2);
console.log(tit);


// smart function parameters
