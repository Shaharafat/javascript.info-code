let obj1 = { name: "arafat", roll: 354, dpt: "CMT",nest:{nest1:'nesging'} };
let obj2 ={}
Object.assign(obj2,obj1)
console.log(obj2);

obj2.name = 'imtiaz'
console.log(obj1.name);


// 👀 object property can refer another <object data="let user = {
  let user={
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

console.log( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
console.log(clone.sizes.width); // 51, see the result from the other one" type="" className=""></object>