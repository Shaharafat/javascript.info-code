let student = {
  name: "John",
  age: 30,
  idAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student);
console.log(typeof json);
console.log(json);

// 👀 JSON.stringify can be applied to primitives as well.
/*
 *JSON supports following data types:

    Objects { ... }
    Arrays [ ... ]
    Primitives:
    strings,
    numbers,
    boolean values true/false,
    null.
*/
// a number in JSON is just a number;
console.log(JSON.stringify(1));

// a string in JSON is still a string but double quoted
console.log(JSON.stringify("test"));

// boolean is boolean in JSON
console.log(JSON.stringify(true));

// array is array in JSON
console.log(JSON.stringify(["arafat", 1, 2, 3]));

/*
 JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

Function properties (methods).
Symbolic properties.
Properties that store undefined.
*/

let user = {
  sayHi() {
    // ignored
    console.log("Hello");
  },

  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user)); // {}

/*

Usually that’s fine. If that’s not what we want, then soon we’ll see how to customize the process.

The great thing is that nested objects are supported and converted automatically.
*/

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log(JSON.stringify(meetup)); // nested objects are supported and converted.

// 👀 Excluding and transforming: replacer

let room = {
  number: 23,
};

let meetups = {
  title: "Conference",
  participants: [{ name: "John" }, { name: "Alice" }],
  place: room, // meetup references room
};

room.occupiedBy = meetups; // room references meetups

console.log(JSON.stringify(meetups, ["title", "participants"]));

/*

Here we are probably too strict. The property list is applied to the whole object structure. So the objects in participants are empty, because name is not in the list.

Let’s include in the list every property except room.occupiedBy that would cause the circular reference:

*/

console.log(
  JSON.stringify(meetups, ["title", "participants", "name", "place", "number"])
); // filtered circular references

// 👀 using maping function to filter
let meetupsJSON = JSON.stringify(meetups, function replacer(key, value) {
  console.log(`${key}: ${value}`);
  return key == "occupiedBy" ? undefined : value;
});

console.log(meetupsJSON);

console.log(JSON.stringify(student, null, 4));

// toJSON
/*
 * Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.
 */

let rooms = {
  number: 23,
  toJSON() {
    return this.number;
  },
};

let metup = {
  title: "conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  rooms,
};

console.log(JSON.stringify(metup)); //That’s because all dates have a built-in toJSON method which returns such kind of string.

console.log(JSON.stringify(rooms)); // only 23.

console.log(JSON.stringify(metup));

// JSON.parse
let numbers = "[0,1,2,3,4,5]";
numbers = JSON.parse(numbers);
console.log(numbers[0]);

// for nested objects
let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let parsedData = JSON.parse(userData);
console.log(parsedData.friends[2]);
console.log(parsedData);

let str = '{"title": "conference","date": "2017-11-30T12:00:00.000Z"}';

let meet = JSON.parse(str);
console.log(meet);

// console.log(meet.getDate()); 👈 wont work for date.cz its string
meet = JSON.parse(str, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
})

console.log(meet.date.getDate());

// works for the nested object as well