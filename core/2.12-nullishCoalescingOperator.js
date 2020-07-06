/*
 * 🚫 This is a recent addition to the language. Old browsers may need polyfills.
 */

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

alert(firstName ?? lastName ?? nickName ?? "Anonymous")


// 👁 precedence is 7 . So, use parenthesis in complex expression.
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// ❌ Due to safety reasons, it’s forbidden to use ?? together with && and || operators.

// ❌ let x = 1 && 2 ?? 3; // Syntax error

/*
 * ✅ 👁 The limitation is surely debatable, but it was added 
 * to the language specification with the purpose to avoid programming 
 * mistakes, as people start to switch to ?? from ||.
*/
let x = (1 && 2) ?? 3;
alert(x)