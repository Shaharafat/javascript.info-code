'use strict'; 

/*
 * 👀 In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

 * For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.


*/


// let age = prompt("What is your age?", 18);
// let age = 16;
// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     // console.log("Hello!");
//     console.log("hello");
    
//   }

// } else {

//   function welcome() {
//     // console.log("Greetings!");
//     console.log("greetings");
    
//   }

// }

// // ...use it later
// welcome(); // Error: welcome is not defined

{
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    console.log("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    console.log("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

}

// 👀 The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

// let age = prompt("What is your age?", 18);
let age = 16;

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now