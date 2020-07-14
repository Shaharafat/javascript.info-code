let guestList = `Guests:
*John
*Pete
*Mary
`;
console.log(guestList);

let str1 = 'Hello \n world'
let str2 = `Hello 
 world`
console.log(str1 == str2);

console.log('my\n'.length); // 👈 string.length is a property.

// Accessing characters
let string = 'hello'
console.log(string[0]);
console.log(string.charAt(0)); // 👈look at it.
console.log(string[string.length - 1]);

// ✋ changing the case.
console.log('interface'.toUpperCase());
console.log('INTERFACE'.toLowerCase());
console.log('interface'[0].toUpperCase());

// ✋ Searching for a substring
let strr = `Widget with id`
console.log(strr.indexOf('widget'));
console.log(strr.indexOf('Widget'));
console.log(strr.indexOf('id')); // widget
console.log(strr.indexOf('with'));
console.log(strr.indexOf('id', 4)); // 👈 look the second parameter.

// ✋ Bitwise NOT trick
// for 32-bit integers ~n equals -(n+1).

let str = "Widget";

if (~str.indexOf("Widget")) { // ✅ used bitwise or.
  console.log( 'Found it!' ); // works
}

// ✋ string.includes()
// returns true/false depending on str contains the substr within

console.log('widget with id'.includes('widget'));
console.log('widget with id'.includes('ids'));
// optional second arguments
console.log('i am a boy and a boy is to be honest'.includes('a', 5)); // 👈 look

// ✋ startsWith/endsWith
console.log('widget'.startsWith('wid'));
console.log('widget'.endsWith('t'));


// ✋ Getting a substring
// 👀 str.slice(start,[end]) // not includes end in result
console.log('stringify'.slice(0,3));
console.log('stringify'.slice(0,1));
console.log('stringify'.slice(-4,-1));

// 👀 str.substring(start,[end])
console.log('arafat'.substring(2,5));
console.log('arafat'.substring(5,1));

// ✋ str.substr(start,[length])
console.log('shah arafat'.substr(2,7));
console.log('arafat'.substr(-4,3));


// ✋ str.codePointAt(pos) // returns the code for the character at position pos.
console.log('z'.codePointAt());
console.log('Z'.codePointAt());

console.log(String.fromCodePoint(90));

let strs = ''
for (let i = 65; i <= 220; i++){
  strs += String.fromCodePoint(i)
}
console.log(strs);

/* 
 * The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

    Returns a negative number if str is less than str2.
    Returns a positive number if str is greater than str2.
    Returns 0 if they are equivalent.
*/

console.log('A'.localeCompare('-a'));
// ✋
console.log('✋'.charCodeAt());
console.log('✋'.codePointAt());
console.log(String.fromCodePoint(9995));
