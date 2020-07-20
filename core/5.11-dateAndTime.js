let now = new Date();
console.log(now);

// new Date(milliseconds)
/*
 * Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.
*/

let jan01_1970 = new Date(0);
console.log(jan01_1970);
jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan01_1970);


// new Date(datestring)
let dateString = new Date('2020-02-29');
console.log(dateString);

// nwe Date(year,month,date,hours,minutes,seconds,ms)

/*
 * Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

  The year must have 4 digits: 2013 is okay, 98 is not.
  The month count starts with 0 (Jan), up to 11 (Dec).
  The date parameter is actually the day of month, if absent then 1 is assumed.
  If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
*/

let setDat = new Date(2011, 2, 23);
console.log(setDat);
// let sep = setDat.split(' ')

now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());
// simple Watch
setTimeout(function () {
  console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
}, 1000);

console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset());

let date = new Date();

console.log(date.getUTCDate());
console.log(date.getUTCMonth());
console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());

// 👀 setting date components
date.setFullYear(2018);
console.log(date.getFullYear());

date.setMonth(0);
console.log(date.getMonth());

date.setDate(0); // 👀 gets last day of previous month

console.log(date.getDate());
// console.log(date.getHours());

date.setHours(0)
console.log(date);


// 👀 AutoCorrection
let corDate = new Date(2013, 0, 32); // correcting automatically.
console.log(corDate);

corDate.setDate(corDate.getDate() + 2);
console.log(corDate);


corDate.setDate(0);
console.log(corDate);


// 👀 Date to number, date diff.

// When a Date object is converted to number, it becomes the timestamp same as date.getTime():  
console.log(typeof corDate);
console.log(+corDate); // become timestamp like getTime

// date can be substructed. the result is their difference in ms.


let start = Date.now();
for (let i = 0; i < 1000000; i++){
  let dosomething = i * i * i;
}
let end = Date.now();
console.log(`The loop took ${end - start} ms`);
// console.log(new Date(0));









// Date.parse
// Date.parse('YYYY-MM-DDTHH:mm:ss.sssZ')

let ms = Date.parse('2012-02-23T12:51:50.417+06:00')
console.log(ms);

// 👀 create new Date Object from timeStamp
let newDate = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));
console.log(newDate);